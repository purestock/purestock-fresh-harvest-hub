-- Give admin role to specific email
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'thotakurayaswanth104@gmail.com';

-- If the user doesn't exist yet, create a manual insert trigger for this specific email
-- This will be handled when they sign up, but we'll update the trigger to set admin role for this email

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