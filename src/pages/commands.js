import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | Sonic MTA</title>
        <meta
          name="description"
          content="Commands page | Welcome"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Help ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>+dashboard</kbd> -{" "}
                  <span className="p-color">All Commands</span>
                </li>
                <li>
                  <kbd>+help</kbd> -{" "}
                  <span className="p-color">Public Commands</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Settings 🐛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>+set-ip <mta-ip></kbd> -{" "}
                  <span className="p-color">Set MTA Server</span>
                </li>
                <li>
                  <kbd>+set-activity</kbd> -{" "}
                  <span className="p-color">Set Status</span>
                </li>
                <li>
                  <kbd>+set-color <hex-code></kbd> -{" "}
                  <span className="p-color">Set Color Messages</span>
                </li>
                <li>
                  <kbd>+set-logo <image-url-or-file></kbd> -{" "}
                  <span className="p-color"Set Logo Messages (Please For More Command With Use the Command +dashboard)</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Public 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>+bot-servers</kbd> -{" "}
                  <span className="p-color">Bot Servers</span>
                </li>
                <li>
                  <kbd>+restart</kbd> -{" "}
                  <span className="p-color">Restarting The Bot</span>
                </li>
                <li>
                  <kbd>+bot</kbd> -{" "}
                  <span className="p-color">About Bot</span>
                </li>
                <li>
                  <kbd>+server</kbd> -{" "}
                  <span className="p-color">About Your Server</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Voice Chat 🎲
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>+join <channel-id></kbd> -{" "}
                  <span className="p-color">Join To VC</span>
                </li>
                <li>
                  <kbd>+disconnect</kbd> -{" "}
                  <span className="p-color">Disconnect With Voice</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
