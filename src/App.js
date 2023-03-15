import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { EthereumClient,w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import {bsc,bscTestnet} from 'wagmi/chains'
=======
import { configureChains, createClient } from "wagmi";
import { EthereumClient,w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { goerli } from "wagmi";
import {bsc} from 'wagmi/chains'
>>>>>>> 97a14d09b91183f98852124984a55169c209cfd9
import { Web3Modal } from "@web3modal/react";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const projectID = '775c78504d00b798fba3744c24ca8f2e'

<<<<<<< HEAD
const {provider} = configureChains([bsc],[w3mProvider({projectId:projectID})])
const wagmiClient = createClient({
  autoConnect:true,
  connectors:w3mConnectors({projectId:projectID,version:1,chains:[bsc]}),
=======
const {provider} = configureChains([goerli],[w3mProvider({projectID})])
const wagmiClient = createClient({
  autoConnect:true,
  connectors:w3mConnectors({projectID,version:1,bsc}),
>>>>>>> 97a14d09b91183f98852124984a55169c209cfd9
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
<<<<<<< HEAD
    <WagmiConfig client={wagmiClient}>
=======
    <wagmiClient client={wagmiClient}>
>>>>>>> 97a14d09b91183f98852124984a55169c209cfd9
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
<<<<<<< HEAD
    </WagmiConfig>
=======
    </wagmiClient>
>>>>>>> 97a14d09b91183f98852124984a55169c209cfd9
    <Web3Modal projectId={projectID} ethereumClient={ethereumClient}/>
    </>
  );
}

export default App;
