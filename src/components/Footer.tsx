import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="bg-border/50 mb-12" />

        <div className="text-center md:text-left md:flex md:justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Kenny Neutron
            </h3>
            <p className="text-muted-foreground mt-2">
              Innovating for a better future.
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex justify-center md:justify-end space-x-6">
            <a
              href="mailto:kennyneutron.hex@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Email</span>
              📧
            </a>
            <a
              href="https://www.facebook.com/kennyneutron2"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Facebook</span>
              📘
            </a>
            <a
              href="https://t.me/KennyNeutron"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Telegram</span>
              ✈️
            </a>
            <a
              href="https://wa.me/qr/JT54GPTKZLMBG1"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">WhatsApp</span>
              💬
            </a>
            <a
              href="https://discordapp.com/users/neutron7643"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Discord</span>
              👾
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kenny Neutron. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
