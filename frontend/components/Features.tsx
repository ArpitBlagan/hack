"use client";
import { motion } from "framer-motion";
import InfoDialog from "./InfoDialog";
const Features = () => {
  return (
    <div className="mb-10">
      <h1 className="font-mono md:text-[50px] text-[30px] text-center font-semibold ">
        What we Offers
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:mx-10">
        <div className="flex flex-col items-center justify-center gap-5 relative ">
          <div className="absolute top-[20%] w-full flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-mono text-[30px] text-gray-400"
            >
              Fair Deal
            </motion.h1>
          </div>
          <img src="https://superteam.fun/_app/immutable/assets/alphasquad_new.ec14b272.png" />
          <InfoDialog
            title="Fair Deal"
            p1="1. Transparent Pricing and Fees
            Clearly communicate the pricing structure for connects, service fees, and bonuses.
            Ensure that service fees are applied consistently across the board to prevent abuse.
            Consider exempting small fixed-price projects from service fees to encourage fair pricing."
            p2="2. Minimum Rates and Pricing Guidelines
            Establish and enforce minimum hourly rates (e.g., $3/hour) and fixed-price project minimums 
            (e.g., $5) to ensure fair compensation."
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-5 relative">
          <div className="absolute top-[20%] w-full flex  items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-mono text-[30px] text-center text-gray-400"
            >
              <span className="block">Realtime</span> Communication
            </motion.h1>
          </div>
          <img src="https://superteam.fun/_app/immutable/assets/ecosystem_calls_new.385a6a4c.png" />
          <InfoDialog
            title="Realtime Communication"
            p1="1. Bidirectional Communication
            WebSockets allow for full-duplex communication channels over a single TCP connection, enabling real-time data exchange between clients and servers. This means both the client and server can send messages independently, enhancing interactivity."
            p2="2. Instant Message Delivery
            Messages are delivered instantly without the need for constant polling. This reduces latency and ensures that users receive messages in real-time, which is crucial for chat applications."
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-5 relative cursor-pointer">
          <div className="absolute top-[20%] w-full flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, animation: "ease-in-out" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-mono text-[30px] text-gray-400"
            >
              Solana Wallets
            </motion.h1>
          </div>
          <img
            src="https://superteam.fun/_app/immutable/assets/Instagrants_new.79df773e.png"
            className=""
          />
          <InfoDialog
            title="Solana Wallets"
            p1="1. Integration with Solana Wallet Adapter
            Utilize the Solana Wallet Adapter library, which provides a standardized way to connect multiple Solana wallets, including popular options like Phantom and Solflare.
            This library supports a variety of wallets and simplifies the connection process for users."
            p2="2. User-Friendly Connection Process
            Implement a Wallet Connection Button that prompts users to select their preferred wallet from a list. This can be done using components like WalletMultiButton from the wallet adapter UI library.
            Ensure the connection process is intuitive, guiding users through the steps to authorize the app to access their wallet."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
