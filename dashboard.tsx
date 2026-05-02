import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Kabinet — Suhrobbek Qayumov" }] }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) {
        navigate({ to: "/auth" });
        return;
      }
      setEmail(session.user.email ?? null);
      // Check admin role via RLS-safe query
      supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle()
        .then(({ data }) => {
          setIsAdmin(!!data);
          setLoading(false);
        });
    });

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate({ to: "/auth" });
    });

    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    toast.success("Chiqildi");
    navigate({ to: "/" });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Yuklanmoqda…</div>;

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Bosh sahifa</Link>
          <Button variant="ghost" onClick={logout}>Chiqish</Button>
        </div>
        <h1 className="text-4xl font-serif mb-2">Shaxsiy kabinet</h1>
        <p className="text-muted-foreground mb-8">{email}</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-border rounded-xl p-6 bg-card">
            <div className="text-sm text-muted-foreground mb-1">Holatingiz</div>
            <div className="text-xl font-medium">{isAdmin ? "Administrator" : "Foydalanuvchi"}</div>
          </div>

          {isAdmin && (
            <Link to="/admin" className="border border-border rounded-xl p-6 bg-card hover:border-foreground/40 transition">
              <div className="text-sm text-muted-foreground mb-1">Admin panel</div>
              <div className="text-xl font-medium">Boshqaruvga kirish →</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
