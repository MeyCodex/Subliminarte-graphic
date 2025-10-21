import { socials } from "@/data/SocialsData";
import { content } from "@/data/content";

function Footer() {
  return (
    <footer className="bg-card border-t border-accent/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
          <span className="text-xl sm:text-2xl font-black tracking-widest text-foreground">
            {content.brand.partOne}{" "}
            <span className="text-accent">{content.brand.partTwo}</span>
          </span>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visita nuestro ${social.name}`}
                className="text-muted hover:text-accent transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full h-px bg-border/50 mb-8"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {content.footer.copyright}
          </p>
          <p className="text-sm text-muted">
            {content.footer.developedBy}
            <a
              href="https://meycode-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-accent transition-colors"
            >
              {" "}
              MeyCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
