

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import NewsLatterFooter from "./Components/NewsLatterFooter/NewsLatterFooter";
import MainHeader from "./Components/MainHeader/MainHeader";
import Players from "./Components/Players/Players";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

export default function App() {

  const [totalCoin, setTotalCoin] = useState(0)
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  });
  const [selectedPlayers, setSelectedPlayers] = useState([]);


  const handleAddCoin = () => {
    setTotalCoin(totalCoin + 6000000);
    toast.success("Credit added to your Account", {
      autoClose: 3000,
      position: 'top-center'
    });
  }

  const handleIsActiveButton = (status) => {
    // console.log(status);

    if (status == "available") {
      setIsActive({
        available: true,
        status: "available"
      })
    } else {
      setIsActive({
        available: false,
        status: "selected"
      })
    }
  }

  const handleSelectPlayer = (player) => {
    // console.log(player)

    if (player.biddingPrice < totalCoin) {
      if (selectedPlayers.length < 6) {
        const isExist = selectedPlayers.find(existPlayer =>existPlayer.id === player.id)
        if(!isExist){
          const newSelectedPlayers = [...selectedPlayers, player]
          setSelectedPlayers(newSelectedPlayers);
          setTotalCoin(totalCoin - player.biddingPrice);
          toast.success(`Congrates!!! ${player.name} is now in your squad.`, {
            autoClose: 3000,
            position: 'top-center'
          })
        }else{
           toast.error("Player already selected", {
            autoClose: 3000,
            position: 'top-center'
          })
        }

      } else {
        toast.error("Already selected maximum player.", {
          autoClose: 3000,
          position: 'top-center'
        })
      }

    } else {
      toast.error(`Not enough money to buy this player. Claim some Credit.`, {
        autoClose: 3000,
        position: 'top-center'
      })
    }

  }

  const handleRemovePlayer = (id) => {
    // console.log(id);

    const remainingPlayers = selectedPlayers.filter(player => player.id !== id)
    setSelectedPlayers(remainingPlayers);
    
    const removePlayer = selectedPlayers.find(player => player.id === id)
    setTotalCoin(totalCoin + removePlayer.biddingPrice)
    toast.warn(`Player removed`, {
      autoClose: 3000,
      position: 'top-center'
    })
  }

  // console.log(selectedPlayers)
  // console.log(isActive)

  return (
    <div className="">
      <Header
        totalCoin={totalCoin}
      ></Header>
      <Banner
        handleAddCoin={handleAddCoin}
      ></Banner>
      <MainHeader
        handleIsActiveButton={handleIsActiveButton}
        isActive={isActive}
        selectedPlayers={selectedPlayers}

      ></MainHeader>

      {
        isActive.available ? <Players handleSelectPlayer={handleSelectPlayer}></Players> : <SelectedPlayers handleIsActiveButton={handleIsActiveButton} selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer}></SelectedPlayers>
      }

      <NewsLatterFooter></NewsLatterFooter>


      <ToastContainer />
    </div>

  )
}