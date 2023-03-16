import Toastify from "toastify-js";

// Settings need to be implemented like:
// Toastify(settings).showToast();
const approveSuccessToast = ()=>{
     Toastify({
    text: `Successfully approved, you can now purchase!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}

const approveFailToast = () =>{
   Toastify({
    text: `Approve failed. You only need to approve once!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast();
};

const purchaseSuccessToast = (amount) => {
    Toastify({
    text: `Successfully purchased ${amount} NYMO!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}
const purchaseFailToast = () => {

    Toastify({
    text: `Something went wrong!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()
}


const notConnectedToast = () => {
    Toastify({
        text: `Please connect your wallet first!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()

};

const notEnoughUsdtToast = () => {
    Toastify({
        text: `You need more USDT!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()

};
const notEnoughBNBToast = () => {
    Toastify({
        text: `You need more BNB!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()

};

const ethAmountToast = (amount) => {
    Toastify({
        text: `Purchased for ${amount} ETH!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()

};

const usdTAmountToast = (amount) => {
    Toastify({
        text: `Purchased for ${amount} USDT!`,
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()

};

const errorToast = (e) => {
    Toastify({
        text: "Something went wrong!",
    duration: 6000,
  
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "16px",
    },
    onClick: function () { } // Callback after click
  }).showToast()

};


export {
    approveSuccessToast,
    approveFailToast,
    ethAmountToast,
    errorToast,
    notConnectedToast,
    notEnoughUsdtToast,
    notEnoughBNBToast,
    purchaseSuccessToast,
    purchaseFailToast,    
    usdTAmountToast
    
}