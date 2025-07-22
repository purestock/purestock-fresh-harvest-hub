-- Drop the existing role constraint
ALTER TABLE profiles DROP CONSTRAINT profiles_role_check;

-- Add new role constraint with all required roles
ALTER TABLE profiles ADD CONSTRAINT profiles_role_check 
CHECK (role = ANY (ARRAY['consumer'::text, 'farmer'::text, 'business'::text, 'admin'::text, 'delivery_agent'::text]));

-- Give admin role to specific email
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'thotakurayaswanth104@gmail.com';

-- Update the handle_new_user function to automatically give admin role to this specific email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    CASE 
      WHEN NEW.email = 'thotakurayaswanth104@gmail.com' THEN 'admin'
      ELSE COALESCE(NEW.raw_user_meta_data->>'role', 'consumer')
    END
  );
  RETURN NEW;
END;
$$;