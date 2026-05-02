import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Panel — Suhrobbek Qayumov" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminPanel,
});

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

function AdminPanel() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/auth" });
        return;
      }
      // Server-side RLS check — can't be bypassed by client
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sess.session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!role) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      setAuthorized(true);
      const { data: msgs } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });
      setMessages((msgs as Message[]) || []);
      setLoading(false);
    })();
  }, [navigate]);

  const deleteMessage = async (id: string) => {
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) {
      toast.error("O'chirib bo'lmadi");
      return;
    }
    setMessages((m) => m.filter((x) => x.id !== id));
    toast.success("O'chirildi");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Tekshirilmoqda…</div>;

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-3xl font-serif mb-2">Kirish taqiqlangan</h1>
          <p className="text-muted-foreground mb-6">Bu sahifaga faqat administratorlar kira oladi. Sizning hisobingiz admin emas.</p>
          <Link to="/dashboard"><Button variant="outline">Kabinetga qaytish</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">← Kabinet</Link>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Admin Panel</div>
        </div>

        <h1 className="text-4xl font-serif mb-2">Boshqaruv paneli</h1>
        <p className="text-muted-foreground mb-10">Sayt ma'lumotlarini boshqarish</p>

        <section>
          <h2 className="text-2xl font-serif mb-4">Aloqa xabarlari ({messages.length})</h2>
          {messages.length === 0 ? (
            <div className="border border-border rounded-xl p-8 text-center text-muted-foreground bg-card">Hozircha xabarlar yo'q</div>
          ) : (
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className="border border-border rounded-xl p-5 bg-card">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-sm text-muted-foreground">{m.email}</div>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{new Date(m.created_at).toLocaleString("uz-UZ")}</div>
                  </div>
                  <p className="text-sm mb-3 whitespace-pre-wrap">{m.message}</p>
                  <Button size="sm" variant="ghost" onClick={() => deleteMessage(m.id)}>O'chirish</Button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
