REVOKE EXECUTE ON FUNCTION public.has_role(UUID, app_role) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, app_role) TO service_role;