/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
The metadata values will be passed to the function as parameters. When the NFT is ready, 
you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, price, description, author, network, fileType) {
    const NFT={
        name: name,
        price: price,
        description: description,
        author: author,
        network: network,
        fileType: fileType,
    };
    myNFT.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=1;i<=myNFT.length;i++){
        console.log("\nNFT "+i);
        console.log("Name: "+myNFT[i-1].name);
        console.log("Price: "+myNFT[i-1].price);
        console.log("Description: "+myNFT[i-1].description);
        console.log("Author: "+myNFT[i-1].author);
        console.log("Network: "+myNFT[i-1].network);
        console.log("File Type: "+myNFT[i-1].fileType);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return myNFT.length;
}

// call your functions below this line
mintNFT(
    "Everydays: the First 5000 Days",
    "69.3M",
    "a collage of 5000 pieces of author's work",
    "Beeple",
    "Ethereum",
    "Image",
);
mintNFT(
    "Bored Ape #8817",
    "3.4M",
    "part of the Bored Ape Yacht Club, known for its distinct appearance with a wool turtleneck and a party horn.",
    "Yuga Labs",
    "Ethereum",
    "PNG",
);
mintNFT(
    "CryptoPunk #3100",
    "7.58M",
    "one of the rarest and most valuable CryptoPunks. It features an alien character with a blue headband.",
    "Larva Labs",
    "Ethereum",
    "PNG",
);

console.log("Total NFT's in collection: "+ getTotalSupply());
listNFTs();
