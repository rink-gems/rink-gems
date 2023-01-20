import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rink Gems</title>
        <meta name={"description"} content={"Rink Gems"} />
        <meta
          name={"viewport"}
          content={"width=device-width, initial-scale=1"}
        />
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
      <Navigation />
      <div className={"uk-section"}>
        <div className={"uk-container"}>
          <div className={"uk-child-width-1-2@s"} data-uk-grid={""}>
            <div>
              <p className={"uk-text-lead"}>
                Varsity Gems NFT&apos;s Available
              </p>
              <p className={"uk-h1"}>Support your Favorite College Athletes</p>
            </div>
            <div />
            <div id={"create-an-nft"}>
              <h2>Athletes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto aspernatur laboriosam minima quasi ullam. Aliquam
                aperiam aut dignissimos dolorum et harum id magnam, maxime odio
                optio repellat, sequi, totam ullam!
              </p>
              <p>
                <Link href={"/create-an-nft"} legacyBehavior>
                  <a className={"uk-button uk-button-primary"}>Create an NFT</a>
                </Link>
              </p>
            </div>
            <div id={"support-a-player"}>
              <h2>Supporters</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto aspernatur laboriosam minima quasi ullam. Aliquam
                aperiam aut dignissimos dolorum et harum id magnam, maxime odio
                optio repellat, sequi, totam ullam!
              </p>
              <p>
                <Link href={"/support-a-player"} legacyBehavior>
                  <a className={"uk-button uk-button-primary"}>
                    Support a Player
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section uk-section-primary"}>
        <div className={"uk-container"}>
          <div
            className={"uk-child-width-1-2@s uk-flex-middle"}
            data-uk-grid={""}
          >
            <div>
              <p className={"uk-text-lead"}>Play Ball</p>
              <p className={"uk-h1"}>Create your own Digital Playing Card</p>
              <p>
                A aliquam cumque distinctio ducimus eligendi eos est illo magnam
                odio, omnis perferendis perspiciatis quas quibusdam
                reprehenderit sint ut vel, veritatis. Maiores.
              </p>
              <form>
                <div>
                  <div className={"uk-margin"}>
                    <div className={"uk-child-width-1-2"} data-uk-grid={""}>
                      <div>
                        <label className={"uk-form-label"}>First Name</label>
                        <input type={"text"} className={"uk-input"} />
                      </div>
                      <div>
                        <label className={"uk-form-label"}>Last Name</label>
                        <input type={"text"} className={"uk-input"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={"uk-margin"}>
                    <label className={"uk-form-label"}>Sport</label>
                    <input type={"text"} className={"uk-input"} />
                  </div>
                </div>
                <div>
                  <div className={"uk-margin"}>
                    <label className={"uk-form-label"}>University</label>
                    <input type={"text"} className={"uk-input"} />
                  </div>
                </div>
              </form>
            </div>
            <div>Image</div>
          </div>
        </div>
      </div>
    </>
  );
}
