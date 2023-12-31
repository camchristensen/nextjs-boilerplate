import Footer from "./Footer";
import Header from "./Header";
import CTA from "./CTA";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  showCTA?: boolean;
};

export default function Container({
  children,
  className,
  showCTA,
}: ContainerProps) {
  return (
    <div className={`root min-h-screen w-full ${className} `}>
      <div className="container">
        <Header />
        <main>{children}</main>
        {/* {showCTA && (
          <CTA
            title="Let's build something spectacular."
            subtitle="I build powerful and beautiful applications for businesses of all sizes. I'm available for work, let's get started!"
            primaryLink="/contact"
            secondaryLink="/about"
            outerClass=""
          />
        )} */}
        <Footer />
      </div>
    </div>
  );
}
