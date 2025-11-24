export async function GET(request, { params }) {
  const { id } = params;

  const products = [
    {
      id: 1,
      img: "https://5.imimg.com/data5/SELLER/Default/2025/8/540151969/OE/EG/UZ/250674228/10l-philips-everflo-oxygen-concentrator-500x500.jpg",
      name: "Philips Everflo 5 Liter Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 43700,
      brochure: "https://pdf.indiamart.com/impdf/2857386737533/MY-250674228/5-lpm-philips-everflo-oxygen-concentrator.pdf",
      video: "https://youtu.be/vjaGkc8-onk?si=UW3eVaJ-U79iTKFL",

    },
    {
      id: 2,
      img: "https://www.oxygentimes.com/storage/productlargeimages/o1031664563086.jpg",
      name: "Oxymed 10 Litre Oxygen Concentrator (Dual Flow)",
      type: "oxygen-concentrators",
      price: 53500,
      discountPrice: 50000,
    },
    {
      id: 3,
      img: "https://www.oxygentimes.com/storage/productlargeimages/sequal-eclipse-51638160122.jpg",
      name: "SeQual Eclipse 5 Portable Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 299000,
    },
    {
      id: 4,
      img: "https://www.oxygentimes.com/storage/productlargeimages/sequal-eclipse-51638160122.jpg",
      name: "AirSep Newlife Intensity 10 Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 174999,
    },
    {
      id: 5,
      img: "https://www.oxygentimes.com/storage/productlargeimages/image--0011636562156.jpg",
      name: "Caire Freestyle Comfort 5 Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 259000,
    },
    {
      id: 6,
      img: "https://www.oxygentimes.com/storage/productlargeimages/inogen-g51659783511.jpg",
      name: "Inogen One G5 Portable Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 224950,
    },
    {
      id: 7,
      img: "https://www.oxygentimes.com/storage/productlargeimages/cover1636559191.jpg",
      name: "Philips SimplyGo Portable Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 215000,
    },
    {
      id: 8,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Image1728386234.jpg",
      name: "Blureha 5L Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 48000,
      discountPrice: 47500,
    },
    {
      id: 9,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Philips-Respironics-Remstar-AUTO-CPAP1648115681.jpg",
      name: "Philips Respironics Remstar Auto CPAP Machine",
      type: "cpap",
      price: 43200,
    },
    {
      id: 10,
      img: "https://www.oxygentimes.com/storage/productlargeimages/sleep-apnea-airsense-11-airsense-11-cpap-front-view1733301068.jpg",
      name: "Resmed Airsense 11 Autoset CPAP Machine",
      type: "cpap",
      price: 67800,
    },
    {
      id: 11,
      img: "https://www.oxygentimes.com/storage/productlargeimages/philips-respironics-dreamstation-auto-bipap1662098019.jpg",
      name: "Philips Dreamstation Auto BiPAP Machine",
      type: "bipap",
      price: 67999,
      discountPrice: 67000,
    },
    {
      id: 12,
      img: "https://www.oxygentimes.com/storage/productlargeimages/BPL-BiPAP-Machine-LifePAP-25S216482003771659945996.jpg",
      name: "BPL LifePAP 25STA BiPAP Machine with Auto-EPAP",
      type: "bipap",
      price: 73000,
    },
    {
      id: 13,
      img: "https://www.oxygentimes.com/storage/productlargeimages/bipap_vt2001658133756.jpg",
      name: "Deckmount VT 200 (VAPS) BiPAP Machine",
      type: "bipap",
      price: 28700,
    },
    {
      id: 14,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Breas-Z2-Auto-CPAP1648115848.jpg",
      name: "ResMed AirSense 10 Auto Set CPAP Machine",
      type: "cpap",
      price: 47800,
      discountPrice: 47000,
    },
    {
      id: 15,
      img: "https://www.oxygentimes.com/storage/productlargeimages/G3_30VT_(2)1657617282.jpg",
      name: "BMC G3 B30VT BiPAP Machine",
      type: "bipap",
      price: 41400,
    },
    {
      id: 16,
      img: "https://www.oxygentimes.com/storage/productlargeimages/ResPro-ST25A-BIPAP-with-Humidifier-&-Mask1648199586.jpg",
      name: "ResPro ST25A BiPAP Machine",
      type: "bipap",
      price: 57500,
    },
    {
      id: 17,
      img: "https://www.oxygentimes.com/storage/productlargeimages/agm-airstart10-front-updateddots_fd17ab31-8af4-49e6-acab-6e78f370b588_540x1709586943.jpg",
      name: "Resmed AirStart 10 Auto CPAP Machine",
      type: "cpap",
      price: 24999,
    },
    {
      id: 18,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Resmed-AirMini-Travel-Auto-CPAP1648114280.jpg",
      name: "Resmed AirMini Travel Auto CPAP",
      type: "cpap",
      price: 49990,
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  return Response.json(product);
}
