import Link from "next/link";

export default function Navigation() {
  const links = [
    { href: "create-an-nft", title: "Create an NFT" },
    { href: "support-a-player", title: "Support a Player" },
    { href: "about-us", title: "About Us" },
    { href: "contact-us", title: "Contact Us" },
  ];

  return (
    <div className={"uk-section-secondary"} data-uk-sticky={""}>
      <div className={"uk-container"}>
        <nav
          className={"uk-navbar-container uk-navbar-transparent"}
          data-uk-navbar={""}
        >
          <div className={"uk-navbar-left"}>
            <Link href={""} legacyBehavior>
              <a
                href={"/"}
                title={"Rink Gems"}
                className={"uk-navbar-item uk-logo"}
              >
                LOGO
              </a>
            </Link>
          </div>
          <div className={"uk-navbar-right"}>
            <ul
              className={"uk-navbar-nav"}
              data-uk-scrollspy-nav={"closest: li; scroll: true; offset: 110"}
            >
              {links.map((link) => (
                <li key={link.title}>
                  <a href={`#${link.href}`} title={`${link.title} | Rink Gems`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
