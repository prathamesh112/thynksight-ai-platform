import { MapPin } from "lucide-react";

const offices = [
  { city: "Pune", country: "India" },
  { city: "Mumbai", country: "India" },
  { city: "London", country: "United Kingdom" },
];

const footerLinks = [
  {
    title: "Platform",
    links: ["MB360.AI", "AI Engine", "Integrations", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-serif text-lg font-bold text-foreground">
                MB360<span className="text-gradient-gold">.AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Thynksight Technologies — reimagining benefits delivery through
              artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              {offices.map((o) => (
                <div key={o.city} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} className="text-primary" />
                  {o.city}, {o.country}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thynksight Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by MB360.AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
