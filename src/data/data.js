import {
  linkdn,
  telegram,
  discord,
  x,
  footerLidn,
  footerDis,
  footerx,
  footerTel,
  pancakeSwap,
  binance,
  coingeko,
  coinPedia,
  cointMarketCap,
} from "../assests";

export const navLinks = [
  { link: "Home", path: "/" },
  { link: "Resources", path: "/resources" },
  { link: "About Us", path: "/aboutus" },
];

export const socialLinks = [
  { socialIcon: linkdn, socialName: "linkdn" },
  { socialIcon: telegram, socialName: "Telegram" },
  { socialIcon: discord, socialName: "Discord" },
  { socialIcon: x, socialName: "x" },
];

export const faqData = [
  {
    questions: "What is Interledgerswap.com?",
    answers:
      "Interledgerswap is a simple and fast instant cryptocurrency exchange service. You do not need to register, and your exchange will have no limits. We’ll quickly convert more than 170 coins for you without charging any additional or hidden fees.",
  },
  {
    questions: "How does exchange works?",
    answers:
      "Interledgerswap is integrated into multiple cryptocurrency trading platforms, including Binance, Bitfinex, Huobi, OKEx, and Kucoin. At the moment of the trade, we’ll choose the best exchange rate on the market at any given moment and offer it to you. We all remember FTX and his collapse that’s why we integrated engine to 5 strongest markets. If collapse happened to those 5 markets, probably whole crypto market will be dead than, not just InterLedgerSwap",
  },
  {
    questions: "Why trust us?",
    answers:
      "Created by a team of experienced blockchain developers, interledgerswap.com is a fully secure service with a twist — we’re completely registration-free. This allows our clients to avoid identification or financial theft. We offer the best rates on the market, as we use reliable cryptocurrency trading platform",
  },
  {
    questions: "How to make a trade?",
    answers: `Click <a href="https://www.youtube.com/watch?v=GZHRs4NWKBI" className="text-[#000] underline" target="blank">Here<a>  to open explanation video`,
  },
  {
    questions: "How Interledger solves problems?",
    answers: `<ul className="pl-[1rem]">
    <li className="list-disc mb-2 ">Solve relying ok cenralize exchanges that limit withdrawals, transfers, and avoid regulations.<li>
    <li className="list-disc mb-2 ">Solve relying ok cenralize exchanges that limit withdrawals, transfers, and avoid regulations.<li>
    <li className="list-disc mb-2 ">Low fees, each fee is based on per swap.<li>
    <li className="list-disc mb-2 ">No login account needed, and no KYC. Users can swap crypto anonymously<li>
    <li className="list-disc mb-2 ">Our swap has all the coins that has liqudity.<li>
    <li className="list-disc mb-2 ">Each transaction little of 5 to 10 minutes, depending on the token is being swapped.<li>
    <li className="list-disc mb-2 ">Our XLS token has liqudity, that backed by utility providing crossboard payment worldwide and partneredship with institutions, banks and investors<li>
    <li className="list-disc mb-2 ">Fully Decentralized and are always growing our team and project to solve issues with our paper money. Which is highly inflated<li>
    <li className="list-disc mb-2 ">Our exchange does not allow mistakes, because it simply does not let you proceed if you enter the wrong address or the wrong network. However, check which network you are trading on before you make an trade.<li>
    <ul>`,
  },
  {
    questions: "Can I hold XLS in some of cold/hard wallets?",
    answers: `<a href="https://www.cada.news/best-wallets-for-binance-smart-chain/" className="text-[#000] underline" target="blank">Here<a> is the 14 best hard wallets to store your BEP-20 (BSC) tokens including Interledgerswap – XLS token. Anyway we recommend the most <a href="https://shop.ledger.com/products/ledger-nano-x" className="text-[#000] underline" target="blank">Ledger Nano X<a> . Remember to always buy hardwallet from official sites and never from second hand or non officail sites of product`,
  },
];
export const buyCryptoData = [
  {
    questions:
      "Can I buy cryptocurrency with fiat through InterLedgerSwap.com?",
    answers:
      "Yes, you can buy cryptocurrency with a USD/EUR card. This feature is brought to you by our third-party partner service, Simplex",
  },
  {
    questions:
      "What fees are there for purchasing crypto with USD/EUR card on InterLedgerSwap.com?",
    answers:
      "This feature is brought to you by our partner, Simplex. Simplex chargers 5% for each purchase (at least $10). InterLedgerSwap charges 0,4% for such purchases. The network fees are applied as usual depending on the currency.",
  },
  {
    questions:
      "Why does the minimum amount for purchasing crypto with a bank card amount to $50?",
    answers:
      "It is a requirement of our crypto purchase provider, Simplex. The amount is chosen based on the network fees and some extra expenses that they cover for you.",
  },
  {
    questions:
      "Are there any upper limits when purchasing crypto with a bank card on InterLedgerSwap?",
    answers:
      "Yes, there are some. The purchase must be up to $20000; the daily purchase limit is $20000 and the monthly purchase limit is $50000 per person.",
  },
  {
    questions:
      "Why do I have to buy BTC during the process of purchasing crypto on InterLedgerSwap.com?",
    answers:
      "This is the solution that we’ve come up with to provide our customers with a wider range of the coins that you can buy with a bank card — as our provider Simplex supports fewer currencies for direct purchase. We are disclosing this, so you have a better understanding of what fees are charged during the transaction.",
  },
  {
    questions: "What card can I use to buy crypto on InterLedgerSwap.com?",
    answers:
      "Your card must comply with the requirements of our purchase provider, Simplex: the card must be issued by VISA or MasterCard. It may be a pre-paid (make sure to check if your pre-paid card is eligible for crypto-related purchases). Wire transfers, American Express and Discover cards are not accepted",
  },
  {
    questions: "Can I use pre-paid cards to buy crypto on InterLedgerSwap?",
    answers:
      "Yes, you can. There are several requirements from our fiat purchase provider, Simplex: your pre-paid card must be eligible for international transactions; it must be enrolled to the 3DSecure program; your pre-paid card issuer must allow cryptocurrency-related transactions.",
  },
  {
    questions: "The bank may decline the transaction!",
    answers: "In that case traders should contact their banks.",
  },
  {
    questions: "Bank code for confirmation of transaction!",
    answers: "Some banks send code to traders to confirm the transaction.",
  },
];
export const cepData = [
  {
    questions: "How fast will my transaction be processed?",
    answers:
      "The processing speed ranges from about two to twenty minutes, depending on how long it takes for a block to happen in the network. Most orders process in just a few minutes. If the transaction is large (more than 1 BTC or equivalent), processing it may take a little longer, depending on the size of your transaction and the capacity of the block. We boast the highest exchange speeds on the market thanks to our revolutionary trading algorithms.",
  },
  {
    questions: "What is cryptocurrency wallet address?",
    answers:
      "Cryptocurrency wallet address is a unique combination of numbers and letters ranging from 26 to 35 characters in length. It usually looks something like this: 17bkZPLB4Wn6F347PLZBR34ijhzQDUFZ4ZC",
  },
  {
    questions: "How do I get my cryptocurrency wallet address?",
    answers:
      "When you decide which crypto coin you would like to acquire, find a reliable wallet. Each cryptocurrency has an official one. When you create a wallet, you automatically get an address and a private key. Keep your private key to yourself and don’t show it to anyone, even if they ask. For security reasons, we will never ask you for your private keys and nobody should",
  },
  {
    questions: "What is a recipient wallet address?",
    answers:
      "If you want to buy a cryptocurrency, you need to have it sent to a specific crypto wallet. Each coin has its own one. The recipient address is your wallet, to which your crypto is transferred after the exchange",
  },
  {
    questions: "What is a transaction hash?",
    answers: `<div className="p-[0.5rem]">
      <p className="mb-[1rem]">Transaction hash (also referred to as “TX”) is the unique identification code that registers every transaction in the blockchain. This unique code allows you to verify its status and validity in the blockchain<p>
      <p>Blockchain operations are irreversible. If the funds are sent, the transaction cannot be canceled by anyone. Therefore, thoroughly check all the payment details before sending funds to anyone, including us or anyone else<p>
      </div>`,
  },
  {
    questions: "What fees are there during an exchange?",
    answers: "We take up to 6.5% commission for each trade",
  },
  {
    questions: "What is the minimal exchange amount?",
    answers:
      "There is no upper limit for cryptocurrency exchanges on interledgerswap.com. However, there are lower limits: they are different for each coin and range from ~$1.7 to $20. We’re working on lowering the minimal exchange amounts for all the coins available on interledgerswap.com. If the deposit you’ve sent us is less than the minimum exchange amount, we will not be able to finish the exchange and guarantee a refund.",
  },
  {
    questions: "What happens if I deposit an unsupported coin or token?",
    answers:
      "If you send in an asset that is not supported on interledgerswap.com (full list of supported assets is available here), unfortunately, we won’t be able to guarantee a refund. Please keep this in mind to make sure your funds are safe at all times.",
  },
  {
    questions: "What is the expected exchange rate?",
    answers:
      "The expected rate is the rate at this exact moment. You must understand that it takes some time to send the deposit and confirm the transaction so, with the market volatility, you might get a bit less or more than you thought you would",
  },
  {
    questions: "What is a fixed rate cryptocurrency exchange?",
    answers: `<div className="p-[0.5rem]">
    <p>A fixed rate crypto exchange is an exchange performed at the same rate which is displayed to the client at the beginning of an exchange, regardless of subsequent rate fluctuations</p>
    <p>In some cases, fixed-rate exchanges have lower rate but the opposite is also possible</p>   
    </div>`,
  },
  {
    questions:
      "What's the difference between fixed rate flow and classic flow?",
    answers: `<div className="p-[0.5rem]">
     <p className="mb-[1rem]">During the classic flow, each transaction may have its own unique exchange rate because of rate fluctuations, market conditions, and network fees. The rate might change at any moment; as a result, you might receive more or less than you thought you would</p>
     <p className="mb-[1rem]">Implementing fixed rate exchanges leads us to lay down a small reserve to guarantee your safety from exchange rate fluctuations. It’s included into the rate you will see at the beginning of the exchange, no other fees included.</p>
     <p className="mb-[1rem]">Because of the rate risks we take, the fixed rate may differ from the classic flow’s rate. However, it gives our customers confidence in the amount they will receive.</p>
     </div>`,
  },
  {
    questions: "How do fixed rate exchanges work?",
    answers:
      "After you’ve picked the Fixed Rate flow, you create an exchange and make a deposit. You have 20 minutes to deposit your exchange funds; during that time, we guarantee that the rate won’t change in any way. You will receive the exact amount that was displayed to you.",
  },
  {
    questions: "When should I choose the fixed rate flow?",
    answers: ` <div className="p-[0.5rem]">
     <p className="mb-[1rem]">You may choose the fixed rate flow if you would like to be certain that the amount of crypto you’ll receive will stay the same, no matter what. With fixed rate exchanges, our users enjoy the stability of their conversions and are safe from sudden rate drops.</p>
     <p className="mb-[1rem]">In some cases, fixed-rate exchanges have lower rate but the opposite is also possible</p>
     </div>`,
  },
  {
    questions:
      "Bitcoin operation is not confirmed for a long time. What does it mean?",
    answers:
      "Translations in the Bitcoin system may be in a state of “Unconfirmed Transaction” for a long time. Most often this is due to the fact that one of the operations does not take long. According to the rules of the Bitcoin network, such a problem translation is attached to another block and then follows the standard procedure.",
  },
  {
    questions: "I did not specify a payment note. It is necessary?",
    answers:
      "When you make an application, you will receive on your monitor exact instructions on what payment you must indicate when making a payment. If this note is not indicated, then we reserve the right to return the amount to the requisites indicated in the application. The procedure can take up to 6 days. At the same time, all commissions are charged to the client",
  },
  {
    questions: "What's so special about SegWit addresses?",
    answers: `<div className="p-[0.5rem]">
     <p className="mb-[1rem]">Please keep in mind that our deposit addresses for BTC conform to the SegWit standard</p>
     <p className="mb-[1rem]">It’s technically impossible for ChangeNOW to withdraw any coins except for BTC from SegWit BTC addresses since neither BCH, LTC, or BSV support SegWit at the moment</p>
     <p className="mb-[1rem]">When it comes to refunds, note that ChangeNOW’s technical department is able to refund only BTC from SegWit BTC addresses. No other crypto assets, including but not limited to LTC, BSV, BCH sent to a SegWit BTC address could be refunded</p>
     </div>`,
  },
];

export const footerSocials = [
  { image: footerLidn,name:"lidn"},
  { image: footerx,name:"x" },
  { image: footerTel,name:"tel"},
  { image: footerDis,name:'dis'},
];

export const patnerImages = [
  pancakeSwap,
  binance,
  coingeko,
  coinPedia,
  cointMarketCap,
];
