import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { EthereumClient,w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import {bsc,bscTestnet} from 'wagmi/chains'
import { Web3Modal } from "@web3modal/react";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const projectID = '775c78504d00b798fba3744c24ca8f2e'

const {provider} = configureChains([bsc],[w3mProvider({projectId:projectID})])
const wagmiClient = createClient({
  autoConnect:true,
  connectors:w3mConnectors({projectId:projectID,version:1,chains:[bsc]}),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient,[bsc])

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
    });
  });



  return (
    <>
    <WagmiConfig client={wagmiClient}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </WagmiConfig>
    <Web3Modal projectId={projectID} ethereumClient={ethereumClient}/>
    </>
  );
}

export default App;
