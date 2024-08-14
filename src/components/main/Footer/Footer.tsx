interface FooterProps {
  text: string;
}

export const Footer = ({ text }: FooterProps) => (
  <section className="bg-menu text-secondary text-center text-xs p-4">
    <div>{text}</div>
  </section>
);
