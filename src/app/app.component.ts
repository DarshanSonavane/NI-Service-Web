import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ni-service-web';
  arr =  [
    {
      "Customer Code": 108012,
      "Customer Name": "Asian Petroleum Centre. Thane",
      "City": "CHAROTI",
      "__EMPTY_1": "108012_Asian Petroleum Centre. Thane"
    },
    {
      "Customer Code": 108013,
      "Customer Name": "Aishwarya PUC Centre. Kalwa",
      "City": "THANE",
      "Amc End": 45352,
      "__EMPTY_1": "108013_Aishwarya PUC Centre. Kalwa"
    },
    {
      "Customer Code": 108068,
      "Customer Name": "Broadway Automobiles, Thane",
      "City": "THANE",
      "Amc End": 45108,
      "__EMPTY_1": "108068_Broadway Automobiles, Thane"
    },
    {
      "Customer Code": 108073,
      "Customer Name": "Bharat PUC Centre. Vasai",
      "City": "VASAI",
      "Amc End": 45238,
      "__EMPTY_1": "108073_Bharat PUC Centre. Vasai"
    },
    {
      "Customer Code": 108089,
      "Customer Name": "Bharati PUC Mobile Centre.Than",
      "City": "THANE",
      "Amc End": 45287,
      "__EMPTY_1": "108089_Bharati PUC Mobile Centre.Than"
    },
    {
      "Customer Code": 108186,
      "Customer Name": "Emmy Puc Centre, Thane",
      "City": "THANE",
      "Amc End": 45448,
      "__EMPTY_1": "108186_Emmy Puc Centre, Thane"
    },
    {
      "Customer Code": 108204,
      "Customer Name": "Ganesh Automobiles.  Thane",
      "City": "THANE",
      "__EMPTY_1": "108204_Ganesh Automobiles.  Thane"
    },
    {
      "Customer Code": 108231,
      "Customer Name": "G A Malhotra PUC Centre - NSawant",
      "City": "THANE",
      "__EMPTY_1": "108231_G A Malhotra PUC Centre - NSawant"
    },
    {
      "Customer Code": 108411,
      "Customer Name": "Mangalmurti PUC Centre, Vasai",
      "City": "VASAI",
      "__EMPTY_1": "108411_Mangalmurti PUC Centre, Vasai"
    },
    {
      "Customer Code": 108427,
      "Customer Name": "Navnit Motors Ltd, Thane",
      "City": "THANE",
      "__EMPTY_1": "108427_Navnit Motors Ltd, Thane"
    },
    {
      "Customer Code": 108464,
      "Customer Name": "Omkar Mobile PUC Centre.Thane",
      "City": "THANE",
      "__EMPTY_1": "108464_Omkar Mobile PUC Centre.Thane"
    },
    {
      "Customer Code": 108468,
      "Customer Name": "Omprakash Mishra",
      "City": "MIRA ROAD",
      "Amc End": 45112,
      "__EMPTY_1": "108468_Omprakash Mishra"
    },
    {
      "Customer Code": 108493,
      "Customer Name": "Prakash Poln Contrl Cntr.Kurla",
      "City": "MUMBAI",
      "Amc End": 45460,
      "__EMPTY_1": "108493_Prakash Poln Contrl Cntr.Kurla"
    },
    {
      "Customer Code": 108495,
      "Customer Name": "Pinky Pollution Control Centre - NSawant",
      "City": "MUMBAI",
      "Amc End": 45118,
      "__EMPTY_1": "108495_Pinky Pollution Control Centre - NSawant"
    },
    {
      "Customer Code": 108497,
      "Customer Name": "Anil Kejriwal - 02POL",
      "City": "MUMBAI",
      "__EMPTY_1": "108497_Anil Kejriwal - 02POL"
    },
    {
      "Customer Code": 108502,
      "Customer Name": "Parvati PUC Centre. Dombivli",
      "City": "THANE",
      "__EMPTY_1": "108502_Parvati PUC Centre. Dombivli"
    },
    {
      "Customer Code": 108508,
      "Customer Name": "Powai Auto Works",
      "City": "MUMBAI",
      "__EMPTY_1": "108508_Powai Auto Works"
    },
    {
      "Customer Code": 108514,
      "Customer Name": "PAS PUC Mobile Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "108514_PAS PUC Mobile Centre"
    },
    {
      "Customer Code": 108521,
      "Customer Name": "P M Enterprises, Achad",
      "City": "PALGHAR",
      "Amc End": 45108,
      "__EMPTY_1": "108521_P M Enterprises, Achad"
    },
    {
      "Customer Code": 108523,
      "Customer Name": "Phooladevi Prithvichand Tapar",
      "City": "MUMBAI",
      "__EMPTY_1": "108523_Phooladevi Prithvichand Tapar"
    },
    {
      "Customer Code": 108543,
      "Customer Name": "RAVI AUTO SERVICES",
      "City": "MUMBAI",
      "Amc End": 45455,
      "__EMPTY_1": "108543_RAVI AUTO SERVICES"
    },
    {
      "Customer Code": 108550,
      "Customer Name": "R. S. VATCHA  CO.",
      "City": "MUMBAI",
      "__EMPTY_1": "108550_R. S. VATCHA  CO."
    },
    {
      "Customer Code": 108551,
      "Customer Name": "Royal Mobile PUC Centre.",
      "City": "MUMBAI",
      "__EMPTY_1": "108551_Royal Mobile PUC Centre."
    },
    {
      "Customer Code": 108558,
      "Customer Name": "Anil Kejriwal - 11Ram",
      "City": "MUMBAI",
      "__EMPTY_1": "108558_Anil Kejriwal - 11Ram"
    },
    {
      "Customer Code": 108572,
      "Customer Name": "Rahul Mobile PUC Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "108572_Rahul Mobile PUC Centre"
    },
    {
      "Customer Code": 108580,
      "Customer Name": "Rama Mobile PUC Centre, Kandiv",
      "City": "MUMBAI",
      "__EMPTY_1": "108580_Rama Mobile PUC Centre, Kandiv"
    },
    {
      "Customer Code": 108592,
      "Customer Name": "SUPER AUTO SERVICE,",
      "City": "MUMBAI",
      "Amc End": 45246,
      "__EMPTY_1": "108592_SUPER AUTO SERVICE,"
    },
    {
      "Customer Code": 108596,
      "Customer Name": "Sai Services.  Bhayandar.",
      "City": "BHAYANDAR",
      "Amc End": 45447,
      "__EMPTY_1": "108596_Sai Services.  Bhayandar."
    },
    {
      "Customer Code": 108602,
      "Customer Name": "STAR SERVICE STATION",
      "City": "MUMBAI",
      "Amc End": 45457,
      "__EMPTY_1": "108602_STAR SERVICE STATION"
    },
    {
      "Customer Code": 108606,
      "Customer Name": "SUBURBAN SERVICE STATION",
      "City": "MUMBAI",
      "__EMPTY_1": "108606_SUBURBAN SERVICE STATION"
    },
    {
      "Customer Code": 108608,
      "Customer Name": "Sai Prasad PUC Centre Vikhroli",
      "City": "MUMBAI",
      "__EMPTY_1": "108608_Sai Prasad PUC Centre Vikhroli"
    },
    {
      "Customer Code": 108611,
      "Customer Name": "Sai Services. Thane",
      "City": "THANE",
      "__EMPTY_1": "108611_Sai Services. Thane"
    },
    {
      "Customer Code": 108612,
      "Customer Name": "STAR AUTO GARAGE,",
      "City": "TARAPUR",
      "__EMPTY_1": "108612_STAR AUTO GARAGE,"
    },
    {
      "Customer Code": 108613,
      "Customer Name": "S.I Kazi",
      "City": "THANE",
      "Amc End": 45318,
      "__EMPTY_1": "108613_S.I Kazi"
    },
    {
      "Customer Code": 108627,
      "Customer Name": "Shree Nityanand Auto ServVasai",
      "City": "VASAI",
      "__EMPTY_1": "108627_Shree Nityanand Auto ServVasai"
    },
    {
      "Customer Code": 108628,
      "Customer Name": "Shree Laxmi PUC Centre Andheri",
      "City": "MUMBAI",
      "Amc End": 45239,
      "__EMPTY_1": "108628_Shree Laxmi PUC Centre Andheri"
    },
    {
      "Customer Code": 108630,
      "Customer Name": "SAI KRIPA MOBILE PUC CENTRE-R MAJUMDAR",
      "City": "MUMBAI",
      "__EMPTY_1": "108630_SAI KRIPA MOBILE PUC CENTRE-R MAJUMDAR"
    },
    {
      "Customer Code": 108631,
      "Customer Name": "Sadichya PUC Centre. Bhandup",
      "City": "MUMBAI",
      "Amc End": 45252,
      "__EMPTY_1": "108631_Sadichya PUC Centre. Bhandup"
    },
    {
      "Customer Code": 108633,
      "Customer Name": "SUVIDHA SERVICES",
      "City": "THANE",
      "Amc End": 45348,
      "__EMPTY_1": "108633_SUVIDHA SERVICES"
    },
    {
      "Customer Code": 108637,
      "Customer Name": "SAI SHRADHA MOBILE PUC CENTRE,S MAJUMDAR",
      "City": "MUMBAI",
      "Amc End": 45309,
      "__EMPTY_1": "108637_SAI SHRADHA MOBILE PUC CENTRE,S MAJUMDAR"
    },
    {
      "Customer Code": 108641,
      "Customer Name": "Suvidha Serv.C/o.Amitha Ent.",
      "City": "MUMBAI",
      "__EMPTY_1": "108641_Suvidha Serv.C/o.Amitha Ent."
    },
    {
      "Customer Code": 108647,
      "Customer Name": "SHRI MAHALAKSHMI PUC MOBILE CENTRE,BERDE",
      "City": "THANE",
      "Amc End": 45310,
      "__EMPTY_1": "108647_SHRI MAHALAKSHMI PUC MOBILE CENTRE,BERDE"
    },
    {
      "Customer Code": 108649,
      "Customer Name": "Sai Darshan Mobile PUC Centre",
      "City": "MUMBAI",
      "Amc End": 45330,
      "__EMPTY_1": "108649_Sai Darshan Mobile PUC Centre"
    },
    {
      "Customer Code": 108650,
      "Customer Name": "SHREE SAIKRUPA (MOBILE)  P U C  CENTRE,",
      "City": "THANE",
      "__EMPTY_1": "108650_SHREE SAIKRUPA (MOBILE)  P U C  CENTRE,"
    },
    {
      "Customer Code": 108653,
      "Customer Name": "Santosh Bansi Magar",
      "City": "MUMBAI",
      "__EMPTY_1": "108653_Santosh Bansi Magar"
    },
    {
      "Customer Code": 108655,
      "Customer Name": "Sushil Mobile PUC Cntre.Mulund",
      "City": "MUMBAI",
      "Amc End": 45147,
      "__EMPTY_1": "108655_Sushil Mobile PUC Cntre.Mulund"
    },
    {
      "Customer Code": 108659,
      "Customer Name": "Sushil Mobile PUC Centre.Thane",
      "City": "THANE",
      "Amc End": 45209,
      "__EMPTY_1": "108659_Sushil Mobile PUC Centre.Thane"
    },
    {
      "Customer Code": 108661,
      "Customer Name": "Swadi Automobiles. Mumbai",
      "City": "MUMBAI",
      "__EMPTY_1": "108661_Swadi Automobiles. Mumbai"
    },
    {
      "Customer Code": 108665,
      "Customer Name": "Sai Motors. Chembur",
      "City": "MUMBAI",
      "__EMPTY_1": "108665_Sai Motors. Chembur"
    },
    {
      "Customer Code": 108680,
      "Customer Name": "Shree Om Sai Mobile PUC Centre-N Sutar",
      "City": "MUMBAI",
      "Amc End": 45470,
      "__EMPTY_1": "108680_Shree Om Sai Mobile PUC Centre-N Sutar"
    },
    {
      "Customer Code": 108682,
      "Customer Name": "Shradha Mobile PUC Checking Centre",
      "City": "MUMBAI",
      "Amc End": 45231,
      "__EMPTY_1": "108682_Shradha Mobile PUC Checking Centre"
    },
    {
      "Customer Code": 108683,
      "Customer Name": "Shree Sidhanath Mobile PUC Cnt",
      "City": "MUMBAI",
      "Amc End": 45457,
      "__EMPTY_1": "108683_Shree Sidhanath Mobile PUC Cnt"
    },
    {
      "Customer Code": 108692,
      "Customer Name": "Safeway Mobile PUC Centre",
      "City": "MUMBAI",
      "Amc End": 45295,
      "__EMPTY_1": "108692_Safeway Mobile PUC Centre"
    },
    {
      "Customer Code": 108693,
      "Customer Name": "Swami Samarth Mobile PUC Cntr",
      "City": "MUMBAI",
      "Amc End": 45396,
      "__EMPTY_1": "108693_Swami Samarth Mobile PUC Cntr"
    },
    {
      "Customer Code": 108703,
      "Customer Name": "Sonu PUC Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "108703_Sonu PUC Centre"
    },
    {
      "Customer Code": 108713,
      "Customer Name": "Sneh Enterprises",
      "City": "VASAI",
      "Amc End": 45366,
      "__EMPTY_1": "108713_Sneh Enterprises"
    },
    {
      "Customer Code": 108714,
      "Customer Name": "SAI P.U.C. MOBILE CENTRE,TARDEO",
      "City": "MUMBAI",
      "__EMPTY_1": "108714_SAI P.U.C. MOBILE CENTRE,TARDEO"
    },
    {
      "Customer Code": 108720,
      "Customer Name": "Star Mobile PUC Centre,V'parle",
      "City": "MUMBAI",
      "__EMPTY_1": "108720_Star Mobile PUC Centre,V'parle"
    },
    {
      "Customer Code": 108723,
      "Customer Name": "Standard Auto Service, Colaba",
      "City": "MUMBAI",
      "Amc End": 45240,
      "__EMPTY_1": "108723_Standard Auto Service, Colaba"
    },
    {
      "Customer Code": 108725,
      "Customer Name": "Sai Motor Mobile PUC Centre - NSawant",
      "City": "MUMBAI",
      "Amc End": 45110,
      "__EMPTY_1": "108725_Sai Motor Mobile PUC Centre - NSawant"
    },
    {
      "Customer Code": 108727,
      "Customer Name": "Shyam PUC Centre (Mobile)",
      "City": "MUMBAI",
      "__EMPTY_1": "108727_Shyam PUC Centre (Mobile)"
    },
    {
      "Customer Code": 108733,
      "Customer Name": "Shivam PUC Mobile, Malad",
      "City": "MUMBAI",
      "__EMPTY_1": "108733_Shivam PUC Mobile, Malad"
    },
    {
      "Customer Code": 108736,
      "Customer Name": "Sidhivinayak PUC Centre, Nitin sawant",
      "City": "THANE",
      "Amc End": 45110,
      "__EMPTY_1": "108736_Sidhivinayak PUC Centre, Nitin sawant"
    },
    {
      "Customer Code": 108741,
      "Customer Name": "Shree Gajanan Mobile PUC Centr",
      "City": "MUMBAI",
      "Amc End": 45469,
      "__EMPTY_1": "108741_Shree Gajanan Mobile PUC Centr"
    },
    {
      "Customer Code": 108753,
      "Customer Name": "Taximens Services Ltd. Dadar",
      "City": "MUMBAI",
      "__EMPTY_1": "108753_Taximens Services Ltd. Dadar"
    },
    {
      "Customer Code": 108754,
      "Customer Name": "Taximen's Services L.Goregaon",
      "City": "MUMBAI",
      "Amc End": 45127,
      "__EMPTY_1": "108754_Taximen's Services L.Goregaon"
    },
    {
      "Customer Code": 108756,
      "Customer Name": "Tinku Automobiles",
      "City": "THANE",
      "__EMPTY_1": "108756_Tinku Automobiles"
    },
    {
      "Customer Code": 108762,
      "Customer Name": "Anil Kejriwal - 14Top",
      "City": "MUMBAI",
      "__EMPTY_1": "108762_Anil Kejriwal - 14Top"
    },
    {
      "Customer Code": 108780,
      "Customer Name": "United Motor Stores. Thane",
      "City": "THANE",
      "Amc End": 45450,
      "__EMPTY_1": "108780_United Motor Stores. Thane"
    },
    {
      "Customer Code": 108783,
      "Customer Name": "UNIVERSAL SERVICE CENTRE",
      "City": "THANE",
      "Amc End": 45108,
      "__EMPTY_1": "108783_UNIVERSAL SERVICE CENTRE"
    },
    {
      "Customer Code": 108791,
      "Customer Name": "Uganda Service Station",
      "City": "MUMBAI",
      "Amc End": 45141,
      "__EMPTY_1": "108791_Uganda Service Station"
    },
    {
      "Customer Code": 108806,
      "Customer Name": "Vishal PUC Mobile - Goregaon",
      "City": "MUMBAI",
      "Amc End": 45258,
      "__EMPTY_1": "108806_Vishal PUC Mobile - Goregaon"
    },
    {
      "Customer Code": 108823,
      "Customer Name": "Vohra Auto Spares,Chembur",
      "City": "MUMBAI",
      "__EMPTY_1": "108823_Vohra Auto Spares,Chembur"
    },
    {
      "Customer Code": 108824,
      "Customer Name": "Vaibhav Sai PUC Centre,Vikhrol",
      "City": "MUMBAI",
      "Amc End": 45111,
      "__EMPTY_1": "108824_Vaibhav Sai PUC Centre,Vikhrol"
    },
    {
      "Customer Code": 108828,
      "Customer Name": "Vaibhav Laxmi PUC Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "108828_Vaibhav Laxmi PUC Centre"
    },
    {
      "Customer Code": 108839,
      "Customer Name": "Yukta Services. Thane",
      "City": "THANE",
      "Amc End": 45108,
      "__EMPTY_1": "108839_Yukta Services. Thane"
    },
    {
      "Customer Code": 108843,
      "Customer Name": "Zenita Auto Works",
      "City": "MUMBAI",
      "Amc End": 45338,
      "__EMPTY_1": "108843_Zenita Auto Works"
    },
    {
      "Customer Code": 108869,
      "Customer Name": "Sai Ganesh Mobile PUC Centre - NSawant",
      "City": "MUMBAI",
      "Amc End": 45265,
      "__EMPTY_1": "108869_Sai Ganesh Mobile PUC Centre - NSawant"
    },
    {
      "Customer Code": 108951,
      "Customer Name": "SAI KUTIR MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "108951_SAI KUTIR MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 109003,
      "Customer Name": "Saibaba Water Supply Co. Vasai",
      "City": "VASAI",
      "__EMPTY_1": "109003_Saibaba Water Supply Co. Vasai"
    },
    {
      "Customer Code": 109012,
      "Customer Name": "Anil Kejriwal - 07Ani",
      "City": "MUMBAI",
      "__EMPTY_1": "109012_Anil Kejriwal - 07Ani"
    },
    {
      "Customer Code": 109015,
      "Customer Name": "Vignesh Mobile PUC Centre-Vikr",
      "City": "MUMBAI",
      "Amc End": 45358,
      "__EMPTY_1": "109015_Vignesh Mobile PUC Centre-Vikr"
    },
    {
      "Customer Code": 109016,
      "Customer Name": "Rohan PUC Centre-Shyam Arote",
      "City": "MUMBAI",
      "Amc End": 45349,
      "__EMPTY_1": "109016_Rohan PUC Centre-Shyam Arote"
    },
    {
      "Customer Code": 109036,
      "Customer Name": "Anil Kejriwal - 08Raj",
      "City": "MUMBAI",
      "__EMPTY_1": "109036_Anil Kejriwal - 08Raj"
    },
    {
      "Customer Code": 109043,
      "Customer Name": "RAJESH PUC CENTRE (MOBILE), SHYAM AROTE",
      "City": "MUMBAI",
      "Amc End": 45450,
      "__EMPTY_1": "109043_RAJESH PUC CENTRE (MOBILE), SHYAM AROTE"
    },
    {
      "Customer Code": 109044,
      "Customer Name": "RAHUL PUC CENTRE (MOBILE), SHYAM AROTE",
      "City": "MUMBAI",
      "Amc End": 45323,
      "__EMPTY_1": "109044_RAHUL PUC CENTRE (MOBILE), SHYAM AROTE"
    },
    {
      "Customer Code": 109049,
      "Customer Name": "SAI LEELA PUC CENTRE R Majumdar",
      "City": "MUMBAI",
      "__EMPTY_1": "109049_SAI LEELA PUC CENTRE R Majumdar"
    },
    {
      "Customer Code": 109052,
      "Customer Name": "ASHOK DADARAO OVHAL",
      "City": "MUMBAI",
      "__EMPTY_1": "109052_ASHOK DADARAO OVHAL"
    },
    {
      "Customer Code": 109076,
      "Customer Name": "SHREE SAIKRUPA (MOBILE) PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "109076_SHREE SAIKRUPA (MOBILE) PUC CENTRE"
    },
    {
      "Customer Code": 109082,
      "Customer Name": "SHRADDA MOBILE P.U.C.CHECKING CENTRE,",
      "City": "MUMBAI",
      "__EMPTY_1": "109082_SHRADDA MOBILE P.U.C.CHECKING CENTRE,"
    },
    {
      "Customer Code": 109095,
      "Customer Name": "DISCOUNT TYRES",
      "City": "MUMBAI",
      "__EMPTY_1": "109095_DISCOUNT TYRES"
    },
    {
      "Customer Code": 109099,
      "Customer Name": "Anil Kejriwal - 05Aga",
      "City": "MUMBAI",
      "__EMPTY_1": "109099_Anil Kejriwal - 05Aga"
    },
    {
      "Customer Code": 109104,
      "Customer Name": "Shree Sai Krupa Scooter Auto Garage,Than",
      "City": "THANE",
      "Amc End": 45453,
      "__EMPTY_1": "109104_Shree Sai Krupa Scooter Auto Garage,Than"
    },
    {
      "Customer Code": 109237,
      "Customer Name": "PAS PUC CENTRE,",
      "City": "THANE",
      "__EMPTY_1": "109237_PAS PUC CENTRE,"
    },
    {
      "Customer Code": 109243,
      "Customer Name": "GEORGE BATTERIES & TYRES",
      "City": "MUMBAI",
      "Amc End": 45258,
      "__EMPTY_1": "109243_GEORGE BATTERIES & TYRES"
    },
    {
      "Customer Code": 109244,
      "Customer Name": "Anil Kejriwal - 23Gen",
      "City": "MUMBAI",
      "__EMPTY_1": "109244_Anil Kejriwal - 23Gen"
    },
    {
      "Customer Code": 109246,
      "Customer Name": "NEW BOMBAY AUTO SUPPLY CO.",
      "City": "MUMBAI",
      "Amc End": 45131,
      "__EMPTY_1": "109246_NEW BOMBAY AUTO SUPPLY CO."
    },
    {
      "Customer Code": 109248,
      "Customer Name": "DESAI AUTO SERVICE",
      "City": "MUMBAI",
      "Amc End": 45201,
      "__EMPTY_1": "109248_DESAI AUTO SERVICE"
    },
    {
      "Customer Code": 109254,
      "Customer Name": "SAI SIDDHI PUC (MOBILE) CENTRE, S AROTE",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "109254_SAI SIDDHI PUC (MOBILE) CENTRE, S AROTE"
    },
    {
      "Customer Code": 109260,
      "Customer Name": "GURU NANAK AUTOMOBILES,",
      "City": "MUMBAI",
      "Amc End": 45271,
      "__EMPTY_1": "109260_GURU NANAK AUTOMOBILES,"
    },
    {
      "Customer Code": 109262,
      "Customer Name": "REKHA PUC CENTRE",
      "City": "VASAI",
      "Amc End": 45108,
      "__EMPTY_1": "109262_REKHA PUC CENTRE"
    },
    {
      "Customer Code": 109266,
      "Customer Name": "ABHISHEK PUC CENTRE,",
      "City": "MIRA ROAD",
      "__EMPTY_1": "109266_ABHISHEK PUC CENTRE,"
    },
    {
      "Customer Code": 109272,
      "Customer Name": "OM BALAJI PUC CENTRE,",
      "City": "THANE",
      "__EMPTY_1": "109272_OM BALAJI PUC CENTRE,"
    },
    {
      "Customer Code": 109275,
      "Customer Name": "AGARWAL AUTOMOBILES,",
      "City": "MUMBAI",
      "__EMPTY_1": "109275_AGARWAL AUTOMOBILES,"
    },
    {
      "Customer Code": 109292,
      "Customer Name": "DAHISAR SERVICE STATION,",
      "City": "THANE",
      "Amc End": 45294,
      "__EMPTY_1": "109292_DAHISAR SERVICE STATION,"
    },
    {
      "Customer Code": 109293,
      "Customer Name": "SHREE RAM MOBILE PUC  CENTRE",
      "City": "MUMBAI",
      "Amc End": 45327,
      "__EMPTY_1": "109293_SHREE RAM MOBILE PUC  CENTRE"
    },
    {
      "Customer Code": 109295,
      "Customer Name": "AMITA ENTERPRISES",
      "City": "THANE",
      "Amc End": 45470,
      "__EMPTY_1": "109295_AMITA ENTERPRISES"
    },
    {
      "Customer Code": 109321,
      "Customer Name": "OM SAI PUC CENTRE,",
      "City": "THANE",
      "__EMPTY_1": "109321_OM SAI PUC CENTRE,"
    },
    {
      "Customer Code": 109375,
      "Customer Name": "GREEN THANE MOBILE PUC CENTRE,",
      "City": "THANE",
      "Amc End": 45298,
      "__EMPTY_1": "109375_GREEN THANE MOBILE PUC CENTRE,"
    },
    {
      "Customer Code": 109417,
      "Customer Name": "ASIAN PETROLEUM CENTRE,",
      "City": "CHAROTI",
      "Amc End": 45108,
      "__EMPTY_1": "109417_ASIAN PETROLEUM CENTRE,"
    },
    {
      "Customer Code": 109731,
      "Customer Name": "Shree Dattaguru PUC Center,Thane",
      "City": "THANE",
      "__EMPTY_1": "109731_Shree Dattaguru PUC Center,Thane"
    },
    {
      "Customer Code": 109732,
      "Customer Name": "Santa Mobile PUC Center,Thane",
      "City": "THANE",
      "Amc End": 45269,
      "__EMPTY_1": "109732_Santa Mobile PUC Center,Thane"
    },
    {
      "Customer Code": 109823,
      "Customer Name": "OMKAR PETROLEUM",
      "City": "VASAI",
      "Amc End": 45355,
      "__EMPTY_1": "109823_OMKAR PETROLEUM"
    },
    {
      "Customer Code": 109859,
      "Customer Name": "Raj Auto Thane",
      "City": "THANE",
      "Amc End": 45279,
      "__EMPTY_1": "109859_Raj Auto Thane"
    },
    {
      "Customer Code": 109868,
      "Customer Name": "SHREE SIDHANATH PUC CENTRE",
      "City": "THANE",
      "Amc End": 45108,
      "__EMPTY_1": "109868_SHREE SIDHANATH PUC CENTRE"
    },
    {
      "Customer Code": 109879,
      "Customer Name": "GRACE AUTOMOBILE & SERVICE",
      "City": "VASAI",
      "__EMPTY_1": "109879_GRACE AUTOMOBILE & SERVICE"
    },
    {
      "Customer Code": 109898,
      "Customer Name": "Sharaa PUC Centre",
      "City": "THANE",
      "__EMPTY_1": "109898_Sharaa PUC Centre"
    },
    {
      "Customer Code": 109937,
      "Customer Name": "SHREE SIDDHANATH PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "109937_SHREE SIDDHANATH PUC CENTRE"
    },
    {
      "Customer Code": 109952,
      "Customer Name": "BRAHMA CHAITANYA PUC CENTERE",
      "City": "THANE",
      "__EMPTY_1": "109952_BRAHMA CHAITANYA PUC CENTERE"
    },
    {
      "Customer Code": 109955,
      "Customer Name": "RAHIL AUTO SERVICES",
      "City": "VIRAR",
      "__EMPTY_1": "109955_RAHIL AUTO SERVICES"
    },
    {
      "Customer Code": 109972,
      "Customer Name": "Jai Mata Di PUC Centre",
      "City": "THANE",
      "__EMPTY_1": "109972_Jai Mata Di PUC Centre"
    },
    {
      "Customer Code": 109974,
      "Customer Name": "Nirmal PUC Centre",
      "City": "THANE",
      "__EMPTY_1": "109974_Nirmal PUC Centre"
    },
    {
      "Customer Code": 109990,
      "Customer Name": "SHARDA PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "109990_SHARDA PUC CENTRE"
    },
    {
      "Customer Code": 109992,
      "Customer Name": "SUSHIL BAKSHI MOBILE PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "109992_SUSHIL BAKSHI MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 109995,
      "Customer Name": "GOHIL AUTOMOBILES",
      "City": "THANE",
      "Amc End": 45457,
      "__EMPTY_1": "109995_GOHIL AUTOMOBILES"
    },
    {
      "Customer Code": 110009,
      "Customer Name": "Vakratunda PUC Centre",
      "City": "PALGHAR",
      "__EMPTY_1": "110009_Vakratunda PUC Centre"
    },
    {
      "Customer Code": 110035,
      "Customer Name": "Khushi PUC Centre",
      "City": "THANE",
      "__EMPTY_1": "110035_Khushi PUC Centre"
    },
    {
      "Customer Code": 110051,
      "Customer Name": "OM ANAND VAN PUC CENTRE (MOBILE PUC)",
      "City": "NALASOPARA",
      "Amc End": 45225,
      "__EMPTY_1": "110051_OM ANAND VAN PUC CENTRE (MOBILE PUC)"
    },
    {
      "Customer Code": 110053,
      "Customer Name": "SHREE GANESH PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "110053_SHREE GANESH PUC CENTRE"
    },
    {
      "Customer Code": 110054,
      "Customer Name": "VIGHNHARTA PUC CENTRE",
      "City": "VIRAR",
      "__EMPTY_1": "110054_VIGHNHARTA PUC CENTRE"
    },
    {
      "Customer Code": 110119,
      "Customer Name": "MORESHWAR PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "110119_MORESHWAR PUC CENTRE"
    },
    {
      "Customer Code": 110125,
      "Customer Name": "STAR PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "110125_STAR PUC CENTRE"
    },
    {
      "Customer Code": 110130,
      "Customer Name": "CHHATTRAPATI PUC CENTRE",
      "City": "THANE",
      "Amc End": 45243,
      "__EMPTY_1": "110130_CHHATTRAPATI PUC CENTRE"
    },
    {
      "Customer Code": 110139,
      "Customer Name": "MRS. BAKSHI",
      "City": "THANE",
      "__EMPTY_1": "110139_MRS. BAKSHI"
    },
    {
      "Customer Code": 110171,
      "Customer Name": "OM SAI PUC CENTRE",
      "City": "THANE",
      "Amc End": 45215,
      "__EMPTY_1": "110171_OM SAI PUC CENTRE"
    },
    {
      "Customer Code": 110183,
      "Customer Name": "GURUKRUPA PUC CENTER",
      "City": "VASAI",
      "Amc End": 45279,
      "__EMPTY_1": "110183_GURUKRUPA PUC CENTER"
    },
    {
      "Customer Code": 110193,
      "Customer Name": "OM VAISHNAVI PUC CENTRE, VASAI",
      "City": "VASAI",
      "__EMPTY_1": "110193_OM VAISHNAVI PUC CENTRE, VASAI"
    },
    {
      "Customer Code": 110196,
      "Customer Name": "OM SIDDHIVINAYAK PUC CENTRE",
      "City": "NALASOPARA",
      "__EMPTY_1": "110196_OM SIDDHIVINAYAK PUC CENTRE"
    },
    {
      "Customer Code": 110204,
      "Customer Name": "OM SAI FUELS",
      "City": "VIRAR",
      "__EMPTY_1": "110204_OM SAI FUELS"
    },
    {
      "Customer Code": 110224,
      "Customer Name": "SHREE BALAJI PUC CENTRE",
      "City": "THANE",
      "Amc End": 45287,
      "__EMPTY_1": "110224_SHREE BALAJI PUC CENTRE"
    },
    {
      "Customer Code": 110276,
      "Customer Name": "SAI GANESH PUC CENTRE RM & AKJ",
      "City": "MIRA ROAD",
      "Amc End": 45259,
      "__EMPTY_1": "110276_SAI GANESH PUC CENTRE RM & AKJ"
    },
    {
      "Customer Code": 110280,
      "Customer Name": "SWARAJYA PUC CENTRE",
      "City": "VASAI",
      "Amc End": 45108,
      "__EMPTY_1": "110280_SWARAJYA PUC CENTRE"
    },
    {
      "Customer Code": 110286,
      "Customer Name": "SAI NATH PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "110286_SAI NATH PUC CENTRE"
    },
    {
      "Customer Code": 110296,
      "Customer Name": "SHIV PUC  CENTRE",
      "City": "BHAYANDAR",
      "Amc End": 45160,
      "__EMPTY_1": "110296_SHIV PUC  CENTRE"
    },
    {
      "Customer Code": 110298,
      "Customer Name": "SHIV SHAKTI PUC CENTRE",
      "City": "THANE",
      "Amc End": 45133,
      "__EMPTY_1": "110298_SHIV SHAKTI PUC CENTRE"
    },
    {
      "Customer Code": 110356,
      "Customer Name": "JIVADANI PUC CENTER",
      "City": "THANE",
      "Amc End": 45443,
      "__EMPTY_1": "110356_JIVADANI PUC CENTER"
    },
    {
      "Customer Code": 110368,
      "Customer Name": "SAI GANESH PUC CENTRE-RAJESH MAJUMDAR",
      "City": "MIRA ROAD",
      "__EMPTY_1": "110368_SAI GANESH PUC CENTRE-RAJESH MAJUMDAR"
    },
    {
      "Customer Code": 110397,
      "Customer Name": "SHREE GANESH PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "110397_SHREE GANESH PUC CENTRE"
    },
    {
      "Customer Code": 110400,
      "Customer Name": "SIDDHANTA PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "110400_SIDDHANTA PUC CENTRE"
    },
    {
      "Customer Code": 110430,
      "Customer Name": "VEERA PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "110430_VEERA PUC CENTRE"
    },
    {
      "Customer Code": 110438,
      "Customer Name": "BHAVANI ENTERPRISES",
      "City": "THANE",
      "__EMPTY_1": "110438_BHAVANI ENTERPRISES"
    },
    {
      "Customer Code": 110459,
      "Customer Name": "RAVITA SANTOSH PATIL",
      "City": "THANE",
      "__EMPTY_1": "110459_RAVITA SANTOSH PATIL"
    },
    {
      "Customer Code": 110478,
      "Customer Name": "VARAD VINAYAK PUC CENTRE",
      "City": "PALGHAR",
      "__EMPTY_1": "110478_VARAD VINAYAK PUC CENTRE"
    },
    {
      "Customer Code": 110485,
      "Customer Name": "SHANTI PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "110485_SHANTI PUC CENTRE"
    },
    {
      "Customer Code": 110518,
      "Customer Name": "PARMATMA PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "110518_PARMATMA PUC CENTRE"
    },
    {
      "Customer Code": 110526,
      "Customer Name": "MR. CHANDRAKANT M. SHUKLA",
      "City": "MIRA ROAD",
      "__EMPTY_1": "110526_MR. CHANDRAKANT M. SHUKLA"
    },
    {
      "Customer Code": 110554,
      "Customer Name": "MALHARI  PUC  CENTRE",
      "City": "THANE",
      "__EMPTY_1": "110554_MALHARI  PUC  CENTRE"
    },
    {
      "Customer Code": 110555,
      "Customer Name": "SHREE PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "110555_SHREE PUC CENTRE"
    },
    {
      "Customer Code": 111432,
      "Customer Name": "GREEN THANE MOBILE PUC CEN, MIRA Road",
      "City": "MIRA ROAD",
      "__EMPTY_1": "111432_GREEN THANE MOBILE PUC CEN, MIRA Road"
    },
    {
      "Customer Code": 111440,
      "Customer Name": "OM SAI PUC CENTRE",
      "City": "BHAYANDAR",
      "__EMPTY_1": "111440_OM SAI PUC CENTRE"
    },
    {
      "Customer Code": 111465,
      "Customer Name": "OM ANSHUMAN PUC CENTRE",
      "City": "THANE",
      "Amc End": 45108,
      "__EMPTY_1": "111465_OM ANSHUMAN PUC CENTRE"
    },
    {
      "Customer Code": 111548,
      "Customer Name": "JIVDANI PUC CENTER",
      "City": "VASAI",
      "__EMPTY_1": "111548_JIVDANI PUC CENTER"
    },
    {
      "Customer Code": 111595,
      "Customer Name": "MAHADEV P.U.C.  CENTRE",
      "City": "VASAI",
      "Amc End": 45462,
      "__EMPTY_1": "111595_MAHADEV P.U.C.  CENTRE"
    },
    {
      "Customer Code": 111618,
      "Customer Name": "Shree Sai Samarth Service\t\t\t\t\t\t\t\t\t",
      "City": "MIRA ROAD",
      "__EMPTY_1": "111618_Shree Sai Samarth Service\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111639,
      "Customer Name": "S.K. PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "THANE",
      "Amc End": 45165,
      "__EMPTY_1": "111639_S.K. PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111665,
      "Customer Name": "JAI MATA DI PUC CENTRE",
      "City": "VASAI",
      "__EMPTY_1": "111665_JAI MATA DI PUC CENTRE"
    },
    {
      "Customer Code": 111674,
      "Customer Name": "OM SHANTI  PUC CENTRE",
      "City": "MIRA ROAD",
      "__EMPTY_1": "111674_OM SHANTI  PUC CENTRE"
    },
    {
      "Customer Code": 111709,
      "Customer Name": "HRITIK MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "THANE",
      "__EMPTY_1": "111709_HRITIK MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111720,
      "Customer Name": "SHIV SAI PUC CENTRE",
      "City": "PALGHAR",
      "__EMPTY_1": "111720_SHIV SAI PUC CENTRE"
    },
    {
      "Customer Code": 111745,
      "Customer Name": "RATHOR  MOTORS\t\t\t\t\t\t\t\t\t",
      "City": "PALGHAR",
      "__EMPTY_1": "111745_RATHOR  MOTORS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111804,
      "Customer Name": "VASAI MOTOR TRAINING  SCHOOL\t\t\t\t\t\t\t\t\t",
      "City": "VASAI",
      "__EMPTY_1": "111804_VASAI MOTOR TRAINING  SCHOOL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111858,
      "Customer Name": "RAJESH MAJUMDAR\t\t\t\t\t\t\t\t\t",
      "City": "THANE",
      "__EMPTY_1": "111858_RAJESH MAJUMDAR\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111894,
      "Customer Name": "EKDANTA PUC CENTRE",
      "City": "VIRAR",
      "__EMPTY_1": "111894_EKDANTA PUC CENTRE"
    },
    {
      "Customer Code": 111897,
      "Customer Name": "STAR PUC CENTRE",
      "City": "MIRA ROAD",
      "__EMPTY_1": "111897_STAR PUC CENTRE"
    },
    {
      "Customer Code": 111919,
      "Customer Name": "DHANLAXMI ENTERPRISE\t\t\t\t\t\t\t\t\t",
      "City": "THANE",
      "Amc End": 45318,
      "__EMPTY_1": "111919_DHANLAXMI ENTERPRISE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 112436,
      "Customer Name": "NEHA PUC  CENTRE",
      "City": "PALGHAR",
      "__EMPTY_1": "112436_NEHA PUC  CENTRE"
    },
    {
      "Customer Code": 112447,
      "Customer Name": "A1 PUC  CENTRE",
      "City": "PALGHAR",
      "Amc End": 45323,
      "__EMPTY_1": "112447_A1 PUC  CENTRE"
    },
    {
      "Customer Code": 123018,
      "Customer Name": "SATYAM PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "THANE",
      "__EMPTY_1": "123018_SATYAM PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130052,
      "Customer Name": "SATYAM PUC CENTRE, Thane",
      "City": "THANE",
      "Amc End": 45147,
      "__EMPTY_1": "130052_SATYAM PUC CENTRE, Thane"
    },
    {
      "Customer Code": 130154,
      "Customer Name": "SAVITRA PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "130154_SAVITRA PUC CENTRE"
    },
    {
      "Customer Code": 130177,
      "Customer Name": "AGARWAL PUC  CENTRE",
      "City": "PALGHAR",
      "__EMPTY_1": "130177_AGARWAL PUC  CENTRE"
    },
    {
      "Customer Code": 130244,
      "Customer Name": "DEV MOTOR  CARE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130244_DEV MOTOR  CARE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130307,
      "Customer Name": "New Vighnaraj PUC Centre",
      "City": "BOISAR",
      "Amc End": 45395,
      "__EMPTY_1": "130307_New Vighnaraj PUC Centre"
    },
    {
      "Customer Code": 130315,
      "Customer Name": "DEVANSH PUC  CENTER\t\t\t\t\t\t\t\t\t",
      "City": "VASAI",
      "Amc End": 45271,
      "__EMPTY_1": "130315_DEVANSH PUC  CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130350,
      "Customer Name": "SAI SIDDHI PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MIRA ROAD",
      "__EMPTY_1": "130350_SAI SIDDHI PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130518,
      "Customer Name": "VIGNHARTHA PUC CENTER\t\t\t\t\t\t\t\t\t",
      "City": "VIRAR",
      "__EMPTY_1": "130518_VIGNHARTHA PUC CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130569,
      "Customer Name": "SHREE GANESH PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "VASAI",
      "__EMPTY_1": "130569_SHREE GANESH PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130677,
      "Customer Name": "ADSPOT DIGITAL MEDIA",
      "City": "VASAI",
      "Amc End": 45271,
      "__EMPTY_1": "130677_ADSPOT DIGITAL MEDIA"
    },
    {
      "Customer Code": 130686,
      "Customer Name": "SHIV SAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "VASAI",
      "__EMPTY_1": "130686_SHIV SAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130787,
      "Customer Name": "SHIVAM ENTERPRISES",
      "City": "THANE",
      "__EMPTY_1": "130787_SHIVAM ENTERPRISES"
    },
    {
      "Customer Code": 130807,
      "Customer Name": "POONAM PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "130807_POONAM PUC CENTRE"
    },
    {
      "Customer Code": 130846,
      "Customer Name": "VIGHNHARTA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "VIRAR",
      "__EMPTY_1": "130846_VIGHNHARTA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130887,
      "Customer Name": "JAI HIND PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MIRA ROAD",
      "Amc End": 45293,
      "__EMPTY_1": "130887_JAI HIND PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130940,
      "Customer Name": "Shree Swami Samarth PUC Centre, Sutar N",
      "City": "THANE",
      "Amc End": 45251,
      "__EMPTY_1": "130940_Shree Swami Samarth PUC Centre, Sutar N"
    },
    {
      "Customer Code": 130988,
      "Customer Name": "ONLINE  SATERIDEVI PUC CENTER",
      "City": "VASAI",
      "__EMPTY_1": "130988_ONLINE  SATERIDEVI PUC CENTER"
    },
    {
      "Customer Code": 130996,
      "Customer Name": "Shambhuraj PUC Centre",
      "City": "VASAI",
      "__EMPTY_1": "130996_Shambhuraj PUC Centre"
    },
    {
      "Customer Code": 130999,
      "Customer Name": "ONLINE BHAIRAVNATH PUC CENTER",
      "City": "VASAI",
      "__EMPTY_1": "130999_ONLINE BHAIRAVNATH PUC CENTER"
    },
    {
      "Customer Code": 131020,
      "Customer Name": "SAN GLOBAL ENTERPRISES",
      "City": "ANDHERI",
      "Amc End": 45239,
      "__EMPTY_1": "131020_SAN GLOBAL ENTERPRISES"
    },
    {
      "Customer Code": 131058,
      "Customer Name": "SHREE CAR DECOR",
      "City": "VASAI",
      "__EMPTY_1": "131058_SHREE CAR DECOR"
    },
    {
      "Customer Code": 131081,
      "Customer Name": "MAHADEV PUC CENTRE.",
      "City": "BOISAR",
      "__EMPTY_1": "131081_MAHADEV PUC CENTRE."
    },
    {
      "Customer Code": 131125,
      "Customer Name": "SHIV ONLINE PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "131125_SHIV ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 105799,
      "Customer Name": "MAHESH AHUJA",
      "City": "RAIPUR",
      "__EMPTY_1": "105799_MAHESH AHUJA"
    },
    {
      "Customer Code": 105834,
      "Customer Name": "TRN ENERGY PVT LTD",
      "City": "RAIGARH",
      "__EMPTY_1": "105834_TRN ENERGY PVT LTD"
    },
    {
      "Customer Code": 105873,
      "Customer Name": "MRITANJAY  TIWARI\t\t\t\t\t\t\t\t\t",
      "City": "BILASPUR \t\t",
      "__EMPTY_1": "105873_MRITANJAY  TIWARI\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 105921,
      "Customer Name": "MANMOHAN TAWRI\t\t\t\t\t\t\t\t\t",
      "City": "DURG",
      "__EMPTY_1": "105921_MANMOHAN TAWRI\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 108009,
      "Customer Name": "Amit PUC Centre. Gondia",
      "City": "GONDIA\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "108009_Amit PUC Centre. Gondia"
    },
    {
      "Customer Code": 108032,
      "Customer Name": "Ahmed Khan Ahmed Said Pathan",
      "City": "NANDURBAR",
      "__EMPTY_1": "108032_Ahmed Khan Ahmed Said Pathan"
    },
    {
      "Customer Code": 108034,
      "Customer Name": "Adarsh Mobile PUC Centre. Kund",
      "City": "MALKAPUR",
      "Amc End": 45329,
      "__EMPTY_1": "108034_Adarsh Mobile PUC Centre. Kund"
    },
    {
      "Customer Code": 108057,
      "Customer Name": "Ashwin Auto Care",
      "City": "AMRAVATI",
      "__EMPTY_1": "108057_Ashwin Auto Care"
    },
    {
      "Customer Code": 108064,
      "Customer Name": "Aditya PUC Centre",
      "City": "AKOLA",
      "__EMPTY_1": "108064_Aditya PUC Centre"
    },
    {
      "Customer Code": 108167,
      "Customer Name": "Devmogra PUC Centre.Navapur",
      "City": "NAVAPUR",
      "Amc End": 45210,
      "__EMPTY_1": "108167_Devmogra PUC Centre.Navapur"
    },
    {
      "Customer Code": 108251,
      "Customer Name": "Hind Auto. Kalyan",
      "City": "KALYAN",
      "__EMPTY_1": "108251_Hind Auto. Kalyan"
    },
    {
      "Customer Code": 108291,
      "Customer Name": "Jai Baba Scooter. Ulhasnagar",
      "City": "ULHASNAGAR",
      "Amc End": 45444,
      "__EMPTY_1": "108291_Jai Baba Scooter. Ulhasnagar"
    },
    {
      "Customer Code": 108377,
      "Customer Name": "Mahavir Auto Emsn PUC Testing",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "108377_Mahavir Auto Emsn PUC Testing"
    },
    {
      "Customer Code": 108451,
      "Customer Name": "New Sai PUC Centre, Dhule",
      "City": "SHIRPUR",
      "__EMPTY_1": "108451_New Sai PUC Centre, Dhule"
    },
    {
      "Customer Code": 108594,
      "Customer Name": "Shah Auto Engineers.Amravati",
      "City": "AMRAVATI",
      "Amc End": 45450,
      "__EMPTY_1": "108594_Shah Auto Engineers.Amravati"
    },
    {
      "Customer Code": 108598,
      "Customer Name": "Servicing House-Rishi Udhoji",
      "City": "NAGPUR",
      "Amc End": 45155,
      "__EMPTY_1": "108598_Servicing House-Rishi Udhoji"
    },
    {
      "Customer Code": 108654,
      "Customer Name": "Sai Taj PUC Centre. Nagpur",
      "City": "NAGPUR",
      "Amc End": 45455,
      "__EMPTY_1": "108654_Sai Taj PUC Centre. Nagpur"
    },
    {
      "Customer Code": 108800,
      "Customer Name": "Vinod Automobiles, Amravati",
      "City": "AMRAVATI",
      "Amc End": 45446,
      "__EMPTY_1": "108800_Vinod Automobiles, Amravati"
    },
    {
      "Customer Code": 108860,
      "Customer Name": "Evergreen Mobile PUC Centre-Rishi Udhoji",
      "City": "NAGPUR",
      "Amc End": 45155,
      "__EMPTY_1": "108860_Evergreen Mobile PUC Centre-Rishi Udhoji"
    },
    {
      "Customer Code": 109001,
      "Customer Name": "SHREEJI PUC CENTRE,",
      "City": "BHIWANDI",
      "__EMPTY_1": "109001_SHREEJI PUC CENTRE,"
    },
    {
      "Customer Code": 109002,
      "Customer Name": "Rajesh Kripalani",
      "City": "ULHASNAGAR",
      "Amc End": 45232,
      "__EMPTY_1": "109002_Rajesh Kripalani"
    },
    {
      "Customer Code": 109078,
      "Customer Name": "N.K. DIESEL PUC CENTRE,",
      "City": "NAGPUR",
      "__EMPTY_1": "109078_N.K. DIESEL PUC CENTRE,"
    },
    {
      "Customer Code": 109238,
      "Customer Name": "SHRADHA SABURI MOBILE PUC CENTRE,",
      "City": "NAGPUR",
      "__EMPTY_1": "109238_SHRADHA SABURI MOBILE PUC CENTRE,"
    },
    {
      "Customer Code": 109276,
      "Customer Name": "HARI OM MOBILE PUC",
      "City": "SHIRPUR",
      "__EMPTY_1": "109276_HARI OM MOBILE PUC"
    },
    {
      "Customer Code": 109289,
      "Customer Name": "GANGA POLLUTION TESTING CENTRE,",
      "City": "RAIPUR",
      "__EMPTY_1": "109289_GANGA POLLUTION TESTING CENTRE,"
    },
    {
      "Customer Code": 109354,
      "Customer Name": "SAGAR PUC CENTRE,",
      "City": "DHULE",
      "__EMPTY_1": "109354_SAGAR PUC CENTRE,"
    },
    {
      "Customer Code": 109398,
      "Customer Name": "Pranav PUC Centre, Bhiwandi",
      "City": "BHIWANDI",
      "Amc End": 45248,
      "__EMPTY_1": "109398_Pranav PUC Centre, Bhiwandi"
    },
    {
      "Customer Code": 109487,
      "Customer Name": "Shri Nilesh Puc Centre",
      "City": "MURBAD",
      "Amc End": 45307,
      "__EMPTY_1": "109487_Shri Nilesh Puc Centre"
    },
    {
      "Customer Code": 109647,
      "Customer Name": "Lohiya PUC Centre,Nandurbar",
      "City": "NAVAPUR",
      "Amc End": 45213,
      "__EMPTY_1": "109647_Lohiya PUC Centre,Nandurbar"
    },
    {
      "Customer Code": 109671,
      "Customer Name": "Santosh PUC Center,Ulhasnagar",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "109671_Santosh PUC Center,Ulhasnagar"
    },
    {
      "Customer Code": 109672,
      "Customer Name": "Kanade PUC Center,Ulhasnagar",
      "City": "ULHASNAGAR",
      "Amc End": 45122,
      "__EMPTY_1": "109672_Kanade PUC Center,Ulhasnagar"
    },
    {
      "Customer Code": 109675,
      "Customer Name": "JAI MATADI PUC",
      "City": "ULHASNAGAR",
      "Amc End": 45444,
      "__EMPTY_1": "109675_JAI MATADI PUC"
    },
    {
      "Customer Code": 109711,
      "Customer Name": "Rajesh PUC Center,Ulhasnagar",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "109711_Rajesh PUC Center,Ulhasnagar"
    },
    {
      "Customer Code": 109716,
      "Customer Name": "Siddhi PUC Center,Bhandara",
      "City": "BHANDARA",
      "Amc End": 45289,
      "__EMPTY_1": "109716_Siddhi PUC Center,Bhandara"
    },
    {
      "Customer Code": 109733,
      "Customer Name": "Mahadev PUC Center,Ulhasnagar-3",
      "City": "ULHASNAGAR",
      "Amc End": 45444,
      "__EMPTY_1": "109733_Mahadev PUC Center,Ulhasnagar-3"
    },
    {
      "Customer Code": 109738,
      "Customer Name": "Vaze PUC Centre, Kalyan",
      "City": "KALYAN",
      "__EMPTY_1": "109738_Vaze PUC Centre, Kalyan"
    },
    {
      "Customer Code": 109807,
      "Customer Name": "SHREE GAJANAN PUC CENTRE",
      "City": "SHIRPUR",
      "__EMPTY_1": "109807_SHREE GAJANAN PUC CENTRE"
    },
    {
      "Customer Code": 109831,
      "Customer Name": "Jai Bhole PUC & Oil Center",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "109831_Jai Bhole PUC & Oil Center"
    },
    {
      "Customer Code": 109871,
      "Customer Name": "SAI PETROLEUM",
      "City": "KALYAN",
      "__EMPTY_1": "109871_SAI PETROLEUM"
    },
    {
      "Customer Code": 109895,
      "Customer Name": "MAHARASHTRA PUC CENTRE",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "109895_MAHARASHTRA PUC CENTRE"
    },
    {
      "Customer Code": 109904,
      "Customer Name": "BAJAD PUC CENTRE",
      "City": "WASHIM",
      "__EMPTY_1": "109904_BAJAD PUC CENTRE"
    },
    {
      "Customer Code": 110023,
      "Customer Name": "SERVICING HOUSE- Rishi Udhoji",
      "City": "NAGPUR",
      "__EMPTY_1": "110023_SERVICING HOUSE- Rishi Udhoji"
    },
    {
      "Customer Code": 110026,
      "Customer Name": "SWAPNIL PUC CENTRE",
      "City": "KALYAN",
      "Amc End": 45341,
      "__EMPTY_1": "110026_SWAPNIL PUC CENTRE"
    },
    {
      "Customer Code": 110037,
      "Customer Name": "Saniya PUC Centre",
      "City": "NANDURBAR",
      "__EMPTY_1": "110037_Saniya PUC Centre"
    },
    {
      "Customer Code": 110067,
      "Customer Name": "Goldie Mobile PUC Centre,Nagpur",
      "City": "NAGPUR",
      "Amc End": 45154,
      "__EMPTY_1": "110067_Goldie Mobile PUC Centre,Nagpur"
    },
    {
      "Customer Code": 110081,
      "Customer Name": "PRATHMESH  PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "110081_PRATHMESH  PUC CENTRE"
    },
    {
      "Customer Code": 110092,
      "Customer Name": "AADARSH PETROLEUM",
      "City": "BHIWANDI",
      "__EMPTY_1": "110092_AADARSH PETROLEUM"
    },
    {
      "Customer Code": 110097,
      "Customer Name": "SHREE SAI PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "110097_SHREE SAI PUC CENTRE"
    },
    {
      "Customer Code": 110160,
      "Customer Name": "WARHOKAR PUC CENTRE",
      "City": "AMRAVATI",
      "Amc End": 45120,
      "__EMPTY_1": "110160_WARHOKAR PUC CENTRE"
    },
    {
      "Customer Code": 110195,
      "Customer Name": "OM SAI  PUC CENTRE",
      "City": "AMRAVATI",
      "__EMPTY_1": "110195_OM SAI  PUC CENTRE"
    },
    {
      "Customer Code": 110202,
      "Customer Name": "ROSHAN  AUTO  CARE",
      "City": "KALYAN",
      "Amc End": 45330,
      "__EMPTY_1": "110202_ROSHAN  AUTO  CARE"
    },
    {
      "Customer Code": 110248,
      "Customer Name": "MR. NILESH PANDURANG SHINDE",
      "City": "MURBAD",
      "__EMPTY_1": "110248_MR. NILESH PANDURANG SHINDE"
    },
    {
      "Customer Code": 110254,
      "Customer Name": "MODERN AUTOMOBILES",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "110254_MODERN AUTOMOBILES"
    },
    {
      "Customer Code": 110281,
      "Customer Name": "SHREE SHANI KRUPA P.U.C. CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "110281_SHREE SHANI KRUPA P.U.C. CENTRE"
    },
    {
      "Customer Code": 110302,
      "Customer Name": "OMKAR MOTOR TRAINING SCHOOL",
      "City": "KALYAN",
      "Amc End": 45295,
      "__EMPTY_1": "110302_OMKAR MOTOR TRAINING SCHOOL"
    },
    {
      "Customer Code": 110319,
      "Customer Name": "KUSHAL PUC CENTRE",
      "City": "WASHIM",
      "Amc End": 45341,
      "__EMPTY_1": "110319_KUSHAL PUC CENTRE"
    },
    {
      "Customer Code": 110388,
      "Customer Name": "LAHOTI PUC CENTRE",
      "City": "WASHIM",
      "__EMPTY_1": "110388_LAHOTI PUC CENTRE"
    },
    {
      "Customer Code": 110396,
      "Customer Name": "JAI MATADI PUC CENTRE",
      "City": "DHULE",
      "__EMPTY_1": "110396_JAI MATADI PUC CENTRE"
    },
    {
      "Customer Code": 110402,
      "Customer Name": "SHRI GANRAJ MOBILE P.U.C. TESTING CENTRE",
      "City": "YAVATMAL",
      "Amc End": 45230,
      "__EMPTY_1": "110402_SHRI GANRAJ MOBILE P.U.C. TESTING CENTRE"
    },
    {
      "Customer Code": 110423,
      "Customer Name": "AAI PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "110423_AAI PUC CENTRE"
    },
    {
      "Customer Code": 110425,
      "Customer Name": "RAHUL  MOBILE PUC CENTRE, AKOLA",
      "City": "AKOLA",
      "Amc End": 45462,
      "__EMPTY_1": "110425_RAHUL  MOBILE PUC CENTRE, AKOLA"
    },
    {
      "Customer Code": 110481,
      "Customer Name": "Jatinder Singh",
      "City": "NAGPUR",
      "__EMPTY_1": "110481_Jatinder Singh"
    },
    {
      "Customer Code": 110487,
      "Customer Name": "Nitin PUC Centre, Kalyan",
      "City": "KALYAN",
      "__EMPTY_1": "110487_Nitin PUC Centre, Kalyan"
    },
    {
      "Customer Code": 110493,
      "Customer Name": "Sarnaik PUC Center",
      "City": "WASHIM",
      "__EMPTY_1": "110493_Sarnaik PUC Center"
    },
    {
      "Customer Code": 110497,
      "Customer Name": "MOHAMMAD AZHARUDDIN POLLUTION TESTING CE",
      "City": "Raipur",
      "__EMPTY_1": "110497_MOHAMMAD AZHARUDDIN POLLUTION TESTING CE"
    },
    {
      "Customer Code": 110519,
      "Customer Name": "Sonu PUC Centre",
      "City": "SHAHAPUR",
      "Amc End": 45239,
      "__EMPTY_1": "110519_Sonu PUC Centre"
    },
    {
      "Customer Code": 110520,
      "Customer Name": "Matoshree PUC Centre, Kalyan",
      "City": "KALYAN",
      "Amc End": 45230,
      "__EMPTY_1": "110520_Matoshree PUC Centre, Kalyan"
    },
    {
      "Customer Code": 110528,
      "Customer Name": "GREEN CITY  MOBILE  PUC",
      "City": "NAGPUR",
      "Amc End": 45155,
      "__EMPTY_1": "110528_GREEN CITY  MOBILE  PUC"
    },
    {
      "Customer Code": 110545,
      "Customer Name": "Pratikar PUC Centre",
      "City": "DHULE",
      "__EMPTY_1": "110545_Pratikar PUC Centre"
    },
    {
      "Customer Code": 111434,
      "Customer Name": "ADITYA  PUC CENTRE",
      "City": "NAGPUR",
      "Amc End": 45124,
      "__EMPTY_1": "111434_ADITYA  PUC CENTRE"
    },
    {
      "Customer Code": 111441,
      "Customer Name": "Chitmitwar Mobile PUC Centre",
      "City": "CHANDRAPUR",
      "__EMPTY_1": "111441_Chitmitwar Mobile PUC Centre"
    },
    {
      "Customer Code": 111446,
      "Customer Name": "Shri Puc Centre",
      "City": "AMRAVATI",
      "__EMPTY_1": "111446_Shri Puc Centre"
    },
    {
      "Customer Code": 111457,
      "Customer Name": "GOPAL RAMLALJI JAISWAL",
      "City": "YAVATMAL",
      "Amc End": 45108,
      "__EMPTY_1": "111457_GOPAL RAMLALJI JAISWAL"
    },
    {
      "Customer Code": 111485,
      "Customer Name": "Green Port Puc Centre-Rishi Udhoji",
      "City": "NAGPUR",
      "Amc End": 45163,
      "__EMPTY_1": "111485_Green Port Puc Centre-Rishi Udhoji"
    },
    {
      "Customer Code": 111517,
      "Customer Name": "BABA  P.U.C. CENTRE",
      "City": "WARDHA",
      "__EMPTY_1": "111517_BABA  P.U.C. CENTRE"
    },
    {
      "Customer Code": 111544,
      "Customer Name": "UTTAMCHAND JAIN",
      "City": "RAIPUR",
      "__EMPTY_1": "111544_UTTAMCHAND JAIN"
    },
    {
      "Customer Code": 111545,
      "Customer Name": "Police Welfare Petrol Pump",
      "City": "BHILAI",
      "Amc End": 45280,
      "__EMPTY_1": "111545_Police Welfare Petrol Pump"
    },
    {
      "Customer Code": 111547,
      "Customer Name": "SURYA  POLLUTION  TESTING CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111547_SURYA  POLLUTION  TESTING CENTRE"
    },
    {
      "Customer Code": 111549,
      "Customer Name": "MR. T.S. AHUJA",
      "City": "RAIPUR",
      "__EMPTY_1": "111549_MR. T.S. AHUJA"
    },
    {
      "Customer Code": 111550,
      "Customer Name": "MRS. MANISHA AVINASH WARHOKAR",
      "City": "AMRAVATI",
      "Amc End": 45223,
      "__EMPTY_1": "111550_MRS. MANISHA AVINASH WARHOKAR"
    },
    {
      "Customer Code": 111554,
      "Customer Name": "VISHWAS POLICE WELFARE PETROL PUMP",
      "City": "DURG",
      "__EMPTY_1": "111554_VISHWAS POLICE WELFARE PETROL PUMP"
    },
    {
      "Customer Code": 111556,
      "Customer Name": "HIMANSHU PUC CENTRE",
      "City": "DHULE",
      "Amc End": 45208,
      "__EMPTY_1": "111556_HIMANSHU PUC CENTRE"
    },
    {
      "Customer Code": 111558,
      "Customer Name": "Shri Shankar Pollution Check Centre",
      "City": "Bemetara",
      "__EMPTY_1": "111558_Shri Shankar Pollution Check Centre"
    },
    {
      "Customer Code": 111560,
      "Customer Name": "SHREE B.P. POLLUTION TESTING CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111560_SHREE B.P. POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111562,
      "Customer Name": "J.J. POLLUTION TESTING CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111562_J.J. POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111563,
      "Customer Name": "DHAMTARI POLLUTION TESTING CENTRE",
      "City": "NAWAGAON",
      "__EMPTY_1": "111563_DHAMTARI POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111564,
      "Customer Name": "MR. AJIT BALWANT SINGH",
      "City": "RAIPUR",
      "__EMPTY_1": "111564_MR. AJIT BALWANT SINGH"
    },
    {
      "Customer Code": 111565,
      "Customer Name": "SHREE SAMARTH PUC CENTRE",
      "City": "KALYAN",
      "Amc End": 45110,
      "__EMPTY_1": "111565_SHREE SAMARTH PUC CENTRE"
    },
    {
      "Customer Code": 111567,
      "Customer Name": "MAHANADI MOBILE POLLUTION TESTING CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111567_MAHANADI MOBILE POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111569,
      "Customer Name": "Dinesh Punshi",
      "City": "Baloda",
      "__EMPTY_1": "111569_Dinesh Punshi"
    },
    {
      "Customer Code": 111571,
      "Customer Name": "YASH POLLUTION TEST CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111571_YASH POLLUTION TEST CENTRE"
    },
    {
      "Customer Code": 111575,
      "Customer Name": "MOHAMMAD ISHAK USMAN",
      "City": "DHAMTARI",
      "__EMPTY_1": "111575_MOHAMMAD ISHAK USMAN"
    },
    {
      "Customer Code": 111576,
      "Customer Name": "PATEL VEHICLE POLLUTION TESTING CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111576_PATEL VEHICLE POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111578,
      "Customer Name": "Indian Pollution Testing Centre",
      "City": "Dhamtari",
      "Amc End": 45362,
      "__EMPTY_1": "111578_Indian Pollution Testing Centre"
    },
    {
      "Customer Code": 111580,
      "Customer Name": "SHRI SAI POLLUTION TESTING CENTRE",
      "City": "KURUD",
      "__EMPTY_1": "111580_SHRI SAI POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111583,
      "Customer Name": "MR. DEEP NARAYAN SHARMA",
      "City": "DHAMTARI",
      "__EMPTY_1": "111583_MR. DEEP NARAYAN SHARMA"
    },
    {
      "Customer Code": 111584,
      "Customer Name": "MR. ABDUL IMRAN KHAN",
      "City": "RAIPUR",
      "__EMPTY_1": "111584_MR. ABDUL IMRAN KHAN"
    },
    {
      "Customer Code": 111585,
      "Customer Name": "AGARWAL MOTORS",
      "City": "RAIPUR",
      "__EMPTY_1": "111585_AGARWAL MOTORS"
    },
    {
      "Customer Code": 111586,
      "Customer Name": "DURGA POLLUTION TESTING CENTRE",
      "City": "DURG",
      "__EMPTY_1": "111586_DURGA POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111589,
      "Customer Name": "SHRI OMSAI POLLUTION TESTING CENTRE",
      "City": "RAIPUR",
      "__EMPTY_1": "111589_SHRI OMSAI POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111594,
      "Customer Name": "VINOD KUMAR SAHU",
      "City": "KURUD",
      "__EMPTY_1": "111594_VINOD KUMAR SAHU"
    },
    {
      "Customer Code": 111599,
      "Customer Name": "Amit Kumar Gupta",
      "City": "Raipur",
      "__EMPTY_1": "111599_Amit Kumar Gupta"
    },
    {
      "Customer Code": 111619,
      "Customer Name": "MANOJ KUMAR AGARWAL\t\t\t\t\t\t\t\t\t",
      "City": "SURGUJA\t",
      "__EMPTY_1": "111619_MANOJ KUMAR AGARWAL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111621,
      "Customer Name": "KUNJ PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "Amc End": 45310,
      "__EMPTY_1": "111621_KUNJ PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111637,
      "Customer Name": "GURUKRUPA CAR & CARE ALIGNMENT\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "__EMPTY_1": "111637_GURUKRUPA CAR & CARE ALIGNMENT\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111646,
      "Customer Name": "GLOBAL  PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "111646_GLOBAL  PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111655,
      "Customer Name": "SADGURU SHANTAI PUC CENTRE",
      "City": "DHULE",
      "Amc End": 45108,
      "__EMPTY_1": "111655_SADGURU SHANTAI PUC CENTRE"
    },
    {
      "Customer Code": 111660,
      "Customer Name": "SWAPNIL  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NANDURBAR",
      "__EMPTY_1": "111660_SWAPNIL  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111664,
      "Customer Name": "GUPTA POLLUTION TESTING CENTRE",
      "City": "BHILAI",
      "__EMPTY_1": "111664_GUPTA POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 111676,
      "Customer Name": "SWASTIK  TRADING CO.\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "__EMPTY_1": "111676_SWASTIK  TRADING CO.\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111679,
      "Customer Name": "S.P.K. PUC Centre",
      "City": "KALYAN",
      "Amc End": 45108,
      "__EMPTY_1": "111679_S.P.K. PUC Centre"
    },
    {
      "Customer Code": 111680,
      "Customer Name": "Yash Enterprises",
      "City": "NAGPUR",
      "Amc End": 45108,
      "__EMPTY_1": "111680_Yash Enterprises"
    },
    {
      "Customer Code": 111684,
      "Customer Name": "ARYAN PUC CENTRE, BHANDARA",
      "City": "BHANDARA",
      "__EMPTY_1": "111684_ARYAN PUC CENTRE, BHANDARA"
    },
    {
      "Customer Code": 111723,
      "Customer Name": "SECURE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "111723_SECURE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111738,
      "Customer Name": "JITENDRA PRALHAD SONJE",
      "City": "DHULE",
      "__EMPTY_1": "111738_JITENDRA PRALHAD SONJE"
    },
    {
      "Customer Code": 111760,
      "Customer Name": "Dwij Ram Sahu",
      "City": "Damteri",
      "__EMPTY_1": "111760_Dwij Ram Sahu"
    },
    {
      "Customer Code": 111806,
      "Customer Name": "SOURABH AHUJA",
      "City": "RAIPUR",
      "__EMPTY_1": "111806_SOURABH AHUJA"
    },
    {
      "Customer Code": 111822,
      "Customer Name": "PADMINI PUC CENTRE",
      "City": "AMRAVATI",
      "Amc End": 45108,
      "__EMPTY_1": "111822_PADMINI PUC CENTRE"
    },
    {
      "Customer Code": 111826,
      "Customer Name": "RANJIT SINGH AHUJA/MS. GURMIT KOUR\t\t",
      "City": "MAHASAMUND",
      "__EMPTY_1": "111826_RANJIT SINGH AHUJA/MS. GURMIT KOUR\t\t"
    },
    {
      "Customer Code": 111827,
      "Customer Name": "RANJIT SINGH AHUJA/MS. JASNEET KOUR",
      "City": "MAHASAMUND",
      "__EMPTY_1": "111827_RANJIT SINGH AHUJA/MS. JASNEET KOUR"
    },
    {
      "Customer Code": 111841,
      "Customer Name": "MS. VANDEEP KAUR CHHABRA\t\t\t\t\t\t\t\t\t",
      "City": "MAHASAMUND",
      "__EMPTY_1": "111841_MS. VANDEEP KAUR CHHABRA\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111843,
      "Customer Name": "BHAVIKA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "111843_BHAVIKA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111844,
      "Customer Name": "BABA PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "111844_BABA PUC CENTRE"
    },
    {
      "Customer Code": 111881,
      "Customer Name": "RUDRA PUC CENTRE Nx\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "__EMPTY_1": "111881_RUDRA PUC CENTRE Nx\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111925,
      "Customer Name": "Lila PUC Centre",
      "City": "KALYAN",
      "__EMPTY_1": "111925_Lila PUC Centre"
    },
    {
      "Customer Code": 111927,
      "Customer Name": "Jeet Pollution Testing Centre",
      "__EMPTY_1": "111927_Jeet Pollution Testing Centre"
    },
    {
      "Customer Code": 111928,
      "Customer Name": "Khalsa Pollution Testing Centre",
      "__EMPTY_1": "111928_Khalsa Pollution Testing Centre"
    },
    {
      "Customer Code": 111963,
      "Customer Name": "ARVIND KAMALAKAR LIMAYE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "Amc End": 45446,
      "__EMPTY_1": "111963_ARVIND KAMALAKAR LIMAYE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111965,
      "Customer Name": "SHRIRAM PARASRAM KADAM\t\t\t\t\t\t\t\t\t",
      "City": "PARBHANI",
      "__EMPTY_1": "111965_SHRIRAM PARASRAM KADAM\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111969,
      "Customer Name": "National Online PUC & Multiservices",
      "City": "HINGOLI",
      "__EMPTY_1": "111969_National Online PUC & Multiservices"
    },
    {
      "Customer Code": 111976,
      "Customer Name": "INDIA ONLINE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "HINGOLI",
      "__EMPTY_1": "111976_INDIA ONLINE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111982,
      "Customer Name": "JAGANNATH PUC CENTRE, S. VAZE\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "__EMPTY_1": "111982_JAGANNATH PUC CENTRE, S. VAZE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111984,
      "Customer Name": "JMK Services",
      "City": "WARDHA",
      "__EMPTY_1": "111984_JMK Services"
    },
    {
      "Customer Code": 112433,
      "Customer Name": "NATIONAL PUC CENTRE",
      "City": "YAVATMAL",
      "__EMPTY_1": "112433_NATIONAL PUC CENTRE"
    },
    {
      "Customer Code": 112434,
      "Customer Name": "ASHWIN PUC CENTRE",
      "City": "AMRAVATI",
      "Amc End": 45108,
      "__EMPTY_1": "112434_ASHWIN PUC CENTRE"
    },
    {
      "Customer Code": 112437,
      "Customer Name": "PRAKRITI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "112437_PRAKRITI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 112440,
      "Customer Name": "RAZA PUC CENTRE",
      "City": "NAGPUR",
      "Amc End": 45297,
      "__EMPTY_1": "112440_RAZA PUC CENTRE"
    },
    {
      "Customer Code": 112441,
      "Customer Name": "DARSHANA PUC CENTRE",
      "City": "AMRAVATI",
      "__EMPTY_1": "112441_DARSHANA PUC CENTRE"
    },
    {
      "Customer Code": 112443,
      "Customer Name": "SATISH MOTORS",
      "City": "AMRAVATI",
      "__EMPTY_1": "112443_SATISH MOTORS"
    },
    {
      "Customer Code": 112456,
      "Customer Name": "RAKSHA PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "112456_RAKSHA PUC CENTRE"
    },
    {
      "Customer Code": 118056,
      "Customer Name": "GAURI PUC CENTRE",
      "City": "DHULE",
      "Amc End": 45147,
      "__EMPTY_1": "118056_GAURI PUC CENTRE"
    },
    {
      "Customer Code": 130000,
      "Customer Name": "RAJ MOBILE PUC CENTRE",
      "City": "NAGPUR",
      "Amc End": 45250,
      "__EMPTY_1": "130000_RAJ MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 130003,
      "Customer Name": "NAKUL MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "Amc End": 45149,
      "__EMPTY_1": "130003_NAKUL MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130027,
      "Customer Name": "MAULI  PUC  CENTER\t\t\t\t\t\t\t\t\t",
      "City": "WASHIM",
      "Amc End": 45460,
      "__EMPTY_1": "130027_MAULI  PUC  CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130035,
      "Customer Name": "Suraksha PUC Centre",
      "City": "WASHIM",
      "__EMPTY_1": "130035_Suraksha PUC Centre"
    },
    {
      "Customer Code": 130050,
      "Customer Name": "AMBAAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "Amc End": 45294,
      "__EMPTY_1": "130050_AMBAAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130057,
      "Customer Name": "CHA CHA PUC CENTRE",
      "City": "GONDIA\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130057_CHA CHA PUC CENTRE"
    },
    {
      "Customer Code": 130077,
      "Customer Name": "HARI OM MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SHIRPUR",
      "__EMPTY_1": "130077_HARI OM MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130080,
      "Customer Name": "ANIL MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130080_ANIL MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130083,
      "Customer Name": "SHIVKRUPA ONLINE PUC CENTRE",
      "City": "BULDHANA",
      "Amc End": 45108,
      "__EMPTY_1": "130083_SHIVKRUPA ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 130116,
      "Customer Name": "GHAZANFAR KHAN SHER KHAN, AKOLA\t\t\t\t",
      "City": "AKOLA",
      "Amc End": 45108,
      "__EMPTY_1": "130116_GHAZANFAR KHAN SHER KHAN, AKOLA\t\t\t\t"
    },
    {
      "Customer Code": 130119,
      "Customer Name": "OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "__EMPTY_1": "130119_OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130120,
      "Customer Name": "NEW OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "__EMPTY_1": "130120_NEW OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130127,
      "Customer Name": "MEHBOOB AUTOMOBILE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130127_MEHBOOB AUTOMOBILE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130128,
      "Customer Name": "MOIN AUTOMOBILE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130128_MOIN AUTOMOBILE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130137,
      "Customer Name": "YASH ENTERPRISES & PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "Amc End": 45108,
      "__EMPTY_1": "130137_YASH ENTERPRISES & PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130138,
      "Customer Name": "MY ONLINE PUC CENTRE",
      "City": "NAGPUR",
      "__EMPTY_1": "130138_MY ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 130146,
      "Customer Name": "PATIL  AGENCY\t\t\t\t\t\t\t\t\t",
      "City": "NANDURBAR",
      "__EMPTY_1": "130146_PATIL  AGENCY\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130160,
      "Customer Name": "PRATIK PUC CENTRE",
      "City": "KALYAN",
      "Amc End": 45237,
      "__EMPTY_1": "130160_PRATIK PUC CENTRE"
    },
    {
      "Customer Code": 130162,
      "Customer Name": "JEJANI TRACTORS\t\t\t\t\t\t\t\t\t",
      "City": "GADCHIROLI",
      "Amc End": 45210,
      "__EMPTY_1": "130162_JEJANI TRACTORS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130164,
      "Customer Name": "KUBER PUC  CENTERE\t\t\t\t\t\t\t\t\t",
      "City": "YAVATMAL",
      "Amc End": 45244,
      "__EMPTY_1": "130164_KUBER PUC  CENTERE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130171,
      "Customer Name": "SANPAL  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130171_SANPAL  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130172,
      "Customer Name": "RAJ PUC CENTRE",
      "City": "GONDIA\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130172_RAJ PUC CENTRE"
    },
    {
      "Customer Code": 130204,
      "Customer Name": "SWAMI SAMRATH PUC CENTRE",
      "City": "AMRAVATI",
      "Amc End": 45247,
      "__EMPTY_1": "130204_SWAMI SAMRATH PUC CENTRE"
    },
    {
      "Customer Code": 130221,
      "Customer Name": "Sai Savera PUC Centre",
      "City": "DHULE",
      "__EMPTY_1": "130221_Sai Savera PUC Centre"
    },
    {
      "Customer Code": 130222,
      "Customer Name": "Sai Sahara PUC Centre",
      "City": "DHULE",
      "__EMPTY_1": "130222_Sai Sahara PUC Centre"
    },
    {
      "Customer Code": 130224,
      "Customer Name": "VENKATESH PUC CENTRE",
      "City": "YAVATMAL",
      "__EMPTY_1": "130224_VENKATESH PUC CENTRE"
    },
    {
      "Customer Code": 130232,
      "Customer Name": "TANK PUC CENTRE",
      "City": "BHANDARA",
      "Amc End": 45353,
      "__EMPTY_1": "130232_TANK PUC CENTRE"
    },
    {
      "Customer Code": 130239,
      "Customer Name": "MAA SHAKABHARI  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DHULE",
      "Amc End": 45285,
      "__EMPTY_1": "130239_MAA SHAKABHARI  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130240,
      "Customer Name": "STAR PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130240_STAR PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130241,
      "Customer Name": "SAHARA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NANDURBAR",
      "Amc End": 45302,
      "__EMPTY_1": "130241_SAHARA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130247,
      "Customer Name": "NEW AJANTA DIESEL WORKS\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130247_NEW AJANTA DIESEL WORKS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130250,
      "Customer Name": "HARISH GEDAM\t\t\t\t\t\t\t\t\t",
      "City": "CHANDRAPUR",
      "Amc End": 45276,
      "__EMPTY_1": "130250_HARISH GEDAM\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130251,
      "Customer Name": "RTO ONLINE MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130251_RTO ONLINE MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130252,
      "Customer Name": "AGARWAL TRANSPORT\t\t\t\t\t\t\t\t\t",
      "City": "GONDIA\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130252_AGARWAL TRANSPORT\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130257,
      "Customer Name": "SAHIL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "WARDHA",
      "__EMPTY_1": "130257_SAHIL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130260,
      "Customer Name": "Balaji PUC Center",
      "City": "WASHIM",
      "__EMPTY_1": "130260_Balaji PUC Center"
    },
    {
      "Customer Code": 130268,
      "Customer Name": "KARTIK  PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "Amc End": 45359,
      "__EMPTY_1": "130268_KARTIK  PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130281,
      "Customer Name": "DINESH PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "Amc End": 45314,
      "__EMPTY_1": "130281_DINESH PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130289,
      "Customer Name": "SAKHARKAR SONS & BROTHERS\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "Amc End": 45293,
      "__EMPTY_1": "130289_SAKHARKAR SONS & BROTHERS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130291,
      "Customer Name": "S T A Services",
      "City": "NAGPUR",
      "__EMPTY_1": "130291_S T A Services"
    },
    {
      "Customer Code": 130295,
      "Customer Name": "CHHATRAPATI ONLINE PUC CENTER\t\t\t\t\t\t\t\t\t",
      "City": "DHULE",
      "__EMPTY_1": "130295_CHHATRAPATI ONLINE PUC CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130305,
      "Customer Name": "SHUBLAXMI TRADERS",
      "City": "NAGPUR",
      "__EMPTY_1": "130305_SHUBLAXMI TRADERS"
    },
    {
      "Customer Code": 130310,
      "Customer Name": "GARUD PUC CENTRE",
      "City": "PARBHANI",
      "__EMPTY_1": "130310_GARUD PUC CENTRE"
    },
    {
      "Customer Code": 130312,
      "Customer Name": "BABA ONLINE PUC STATION\t\t\t\t\t\t\t\t\t",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "130312_BABA ONLINE PUC STATION\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130332,
      "Customer Name": "GLOBAL  PUC  CENTRE",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "130332_GLOBAL  PUC  CENTRE"
    },
    {
      "Customer Code": 130341,
      "Customer Name": "SAIBABA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "__EMPTY_1": "130341_SAIBABA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130347,
      "Customer Name": "PAL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DHULE",
      "Amc End": 45217,
      "__EMPTY_1": "130347_PAL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130353,
      "Customer Name": "ADITYA'S PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "Amc End": 45258,
      "__EMPTY_1": "130353_ADITYA'S PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130374,
      "Customer Name": "Vaze PUC Centre",
      "City": "KALYAN",
      "__EMPTY_1": "130374_Vaze PUC Centre"
    },
    {
      "Customer Code": 130379,
      "Customer Name": "OM SAI PUC CENTRE, GONDIA",
      "City": "GONDIA\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130379_OM SAI PUC CENTRE, GONDIA"
    },
    {
      "Customer Code": 130386,
      "Customer Name": "PRANAY PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "YAVATMAL",
      "Amc End": 45327,
      "__EMPTY_1": "130386_PRANAY PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130388,
      "Customer Name": "SHRADDHA SABURI MOBILE PUC CENTRE",
      "City": "NAGPUR",
      "__EMPTY_1": "130388_SHRADDHA SABURI MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 130392,
      "Customer Name": "OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "CHANDRAPUR",
      "__EMPTY_1": "130392_OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130394,
      "Customer Name": "VENKATESH AUTOMOBILE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130394_VENKATESH AUTOMOBILE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130426,
      "Customer Name": "SHRI AADITYA PUC CENTRE",
      "City": "DHULE",
      "Amc End": 45108,
      "__EMPTY_1": "130426_SHRI AADITYA PUC CENTRE"
    },
    {
      "Customer Code": 130429,
      "Customer Name": "GUPTA INSURANCE & PUC \t\t\t\t\t\t\t\t\t",
      "City": "AKOLA",
      "__EMPTY_1": "130429_GUPTA INSURANCE & PUC \t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130432,
      "Customer Name": "MRS. ANAGHA ATUL KHANDALKAR\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "Amc End": 45387,
      "__EMPTY_1": "130432_MRS. ANAGHA ATUL KHANDALKAR\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130433,
      "Customer Name": "DHVEN PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAGPUR",
      "__EMPTY_1": "130433_DHVEN PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130466,
      "Customer Name": "SITARAM PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "YAVATMAL",
      "__EMPTY_1": "130466_SITARAM PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130469,
      "Customer Name": "ATUL ONLINE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "Amc End": 45133,
      "__EMPTY_1": "130469_ATUL ONLINE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130483,
      "Customer Name": "MANISH PUC CENTRE",
      "City": "DHULE",
      "Amc End": 45147,
      "__EMPTY_1": "130483_MANISH PUC CENTRE"
    },
    {
      "Customer Code": 130491,
      "Customer Name": "Monti Singh Khanuja",
      "__EMPTY_1": "130491_Monti Singh Khanuja"
    },
    {
      "Customer Code": 130494,
      "Customer Name": "S.P. K. PUC  CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "130494_S.P. K. PUC  CENTRE"
    },
    {
      "Customer Code": 130495,
      "Customer Name": "SARKAR  PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AKOLA",
      "Amc End": 45108,
      "__EMPTY_1": "130495_SARKAR  PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130500,
      "Customer Name": "SHRI KRISHNA PUC",
      "City": "NAGPUR",
      "__EMPTY_1": "130500_SHRI KRISHNA PUC"
    },
    {
      "Customer Code": 130501,
      "Customer Name": "PRASAD  PUC CENTRE",
      "City": "AMRAVATI",
      "__EMPTY_1": "130501_PRASAD  PUC CENTRE"
    },
    {
      "Customer Code": 130509,
      "Customer Name": "GUDDI AUTOCARE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "__EMPTY_1": "130509_GUDDI AUTOCARE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130553,
      "Customer Name": "RAVI PUC  CENTER\t\t\t\t\t\t\t\t\t",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "130553_RAVI PUC  CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130610,
      "Customer Name": "CHHATTISGARH POLLUTION TESTING CENTRE\t\t\t",
      "__EMPTY_1": "130610_CHHATTISGARH POLLUTION TESTING CENTRE\t\t\t"
    },
    {
      "Customer Code": 130624,
      "Customer Name": "AMBAI PUC CENTRE",
      "City": "AMRAVATI",
      "__EMPTY_1": "130624_AMBAI PUC CENTRE"
    },
    {
      "Customer Code": 130629,
      "Customer Name": "Vidharbha Online PUC Centre",
      "City": "WASHIM",
      "__EMPTY_1": "130629_Vidharbha Online PUC Centre"
    },
    {
      "Customer Code": 130630,
      "Customer Name": "MANGLANI PUC  CENTRE",
      "City": "ULHASNAGAR",
      "Amc End": 45304,
      "__EMPTY_1": "130630_MANGLANI PUC  CENTRE"
    },
    {
      "Customer Code": 130633,
      "Customer Name": "SHUBHLAXMI TRADERS",
      "City": "NAGPUR",
      "__EMPTY_1": "130633_SHUBHLAXMI TRADERS"
    },
    {
      "Customer Code": 130639,
      "Customer Name": "ROYAL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KALYAN",
      "Amc End": 45315,
      "__EMPTY_1": "130639_ROYAL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130644,
      "Customer Name": "R J ENTERPRISES",
      "City": "KALYAN",
      "__EMPTY_1": "130644_R J ENTERPRISES"
    },
    {
      "Customer Code": 130653,
      "Customer Name": "PRADUSHAN JANCH KENDRA",
      "__EMPTY_1": "130653_PRADUSHAN JANCH KENDRA"
    },
    {
      "Customer Code": 130671,
      "Customer Name": "H.S.R. MOBILE POLLUTION TESTING CENTRE",
      "__EMPTY_1": "130671_H.S.R. MOBILE POLLUTION TESTING CENTRE"
    },
    {
      "Customer Code": 130711,
      "Customer Name": "GURUKRUPA PUC CENTER",
      "City": "KALYAN",
      "Amc End": 45387,
      "__EMPTY_1": "130711_GURUKRUPA PUC CENTER"
    },
    {
      "Customer Code": 130733,
      "Customer Name": "M A ENTERPRISES PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "130733_M A ENTERPRISES PUC CENTRE"
    },
    {
      "Customer Code": 130751,
      "Customer Name": "MAHAKALI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "CHANDRAPUR",
      "__EMPTY_1": "130751_MAHAKALI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130756,
      "Customer Name": "SHIV PUC CENTRE",
      "City": "GONDIA\t\t\t\t\t\t\t\t\t",
      "Amc End": 45450,
      "__EMPTY_1": "130756_SHIV PUC CENTRE"
    },
    {
      "Customer Code": 130760,
      "Customer Name": "SAI SITARA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DHULE",
      "Amc End": 45108,
      "__EMPTY_1": "130760_SAI SITARA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130761,
      "Customer Name": "NEW SAI SITARA PUC CENTRE",
      "City": "DHULE",
      "__EMPTY_1": "130761_NEW SAI SITARA PUC CENTRE"
    },
    {
      "Customer Code": 130788,
      "Customer Name": "MAULI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMRAVATI",
      "__EMPTY_1": "130788_MAULI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130867,
      "Customer Name": "RAVI INSURANCE FIRM & PUC CENTRE\t\t\t\t\t\t\t\t",
      "City": "ULHASNAGAR",
      "Amc End": 45258,
      "__EMPTY_1": "130867_RAVI INSURANCE FIRM & PUC CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130898,
      "Customer Name": "NEW AKOLA PUC CENTRE",
      "City": "AKOLA",
      "__EMPTY_1": "130898_NEW AKOLA PUC CENTRE"
    },
    {
      "Customer Code": 130918,
      "Customer Name": "SAMARTH KRUPA PUC CENTRE",
      "City": "KALYAN",
      "Amc End": 45335,
      "__EMPTY_1": "130918_SAMARTH KRUPA PUC CENTRE"
    },
    {
      "Customer Code": 130932,
      "Customer Name": "VAIBHAV PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "130932_VAIBHAV PUC CENTRE"
    },
    {
      "Customer Code": 130935,
      "Customer Name": "SHREE ENTERPRISES, KALYAN",
      "City": "KALYAN",
      "__EMPTY_1": "130935_SHREE ENTERPRISES, KALYAN"
    },
    {
      "Customer Code": 130946,
      "Customer Name": "TISAI PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "130946_TISAI PUC CENTRE"
    },
    {
      "Customer Code": 131023,
      "Customer Name": "A V M INSURANCE AND PUC",
      "City": "ULHASNAGAR",
      "__EMPTY_1": "131023_A V M INSURANCE AND PUC"
    },
    {
      "Customer Code": 131031,
      "Customer Name": "Samrth Puc Centre",
      "City": "KALYAN",
      "__EMPTY_1": "131031_Samrth Puc Centre"
    },
    {
      "Customer Code": 131032,
      "Customer Name": "Samarth Puc Centre - kalyan",
      "City": "KALYAN",
      "__EMPTY_1": "131032_Samarth Puc Centre - kalyan"
    },
    {
      "Customer Code": 131038,
      "Customer Name": "MOTOR POINT PUC AND INSURANCE CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "131038_MOTOR POINT PUC AND INSURANCE CENTRE"
    },
    {
      "Customer Code": 131040,
      "Customer Name": "Deep Auto Agency",
      "City": "KALYAN",
      "__EMPTY_1": "131040_Deep Auto Agency"
    },
    {
      "Customer Code": 131042,
      "Customer Name": "Kiran Auto Garage & Puc Centre",
      "City": "KALYAN",
      "__EMPTY_1": "131042_Kiran Auto Garage & Puc Centre"
    },
    {
      "Customer Code": 131045,
      "Customer Name": "SHREE SAI PUC CENTRE",
      "City": "NAGPUR",
      "__EMPTY_1": "131045_SHREE SAI PUC CENTRE"
    },
    {
      "Customer Code": 131057,
      "Customer Name": "KAMLESHWAR PUC CENTRE",
      "City": "KALYAN",
      "__EMPTY_1": "131057_KAMLESHWAR PUC CENTRE"
    },
    {
      "Customer Code": 131062,
      "Customer Name": "GURU GHASIDAS VISHWAVIDYALA BILASPUR",
      "City": "BILASPUR",
      "__EMPTY_1": "131062_GURU GHASIDAS VISHWAVIDYALA BILASPUR"
    },
    {
      "Customer Code": 131076,
      "Customer Name": "MAA BHAWANI PUC CENTRE",
      "City": "NAGPUR",
      "__EMPTY_1": "131076_MAA BHAWANI PUC CENTRE"
    },
    {
      "Customer Code": 131082,
      "Customer Name": "KHATRI MOBILE VAN PUC TESTING CENTRE,",
      "City": "Chhattsgarh",
      "__EMPTY_1": "131082_KHATRI MOBILE VAN PUC TESTING CENTRE,"
    },
    {
      "Customer Code": 131132,
      "Customer Name": "ZAIN PUC CENTRE",
      "City": "NAGPUR",
      "__EMPTY_1": "131132_ZAIN PUC CENTRE"
    },
    {
      "Customer Code": 108014,
      "Customer Name": "AHMEDBHAI MOHMAD YUSUF",
      "City": "MUMBAI",
      "__EMPTY_1": "108014_AHMEDBHAI MOHMAD YUSUF"
    },
    {
      "Customer Code": 108036,
      "Customer Name": "Anmol Mobile PUC CentreAndheri",
      "City": "MUMBAI",
      "Amc End": 45112,
      "__EMPTY_1": "108036_Anmol Mobile PUC CentreAndheri"
    },
    {
      "Customer Code": 108059,
      "Customer Name": "Auro Petroleum Centre, Chembur",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "108059_Auro Petroleum Centre, Chembur"
    },
    {
      "Customer Code": 108080,
      "Customer Name": "Base Victualling Yard, Colaba",
      "City": "MUMBAI",
      "__EMPTY_1": "108080_Base Victualling Yard, Colaba"
    },
    {
      "Customer Code": 108105,
      "Customer Name": "Dr.Babasaheb Ambedkar Tech.Uni",
      "City": "LONERE",
      "__EMPTY_1": "108105_Dr.Babasaheb Ambedkar Tech.Uni"
    },
    {
      "Customer Code": 108106,
      "Customer Name": "Bhasin Automobiles",
      "City": "MUMBAI",
      "__EMPTY_1": "108106_Bhasin Automobiles"
    },
    {
      "Customer Code": 108117,
      "Customer Name": "CHHEDA SERVICE STATION. Mulund.",
      "City": "MUMBAI",
      "Amc End": 45162,
      "__EMPTY_1": "108117_CHHEDA SERVICE STATION. Mulund."
    },
    {
      "Customer Code": 108122,
      "Customer Name": "Chips N Bites Santacruz",
      "City": "MUMBAI",
      "__EMPTY_1": "108122_Chips N Bites Santacruz"
    },
    {
      "Customer Code": 108126,
      "Customer Name": "COMPUCHECK MOBILE P.U.C CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "108126_COMPUCHECK MOBILE P.U.C CENTRE"
    },
    {
      "Customer Code": 108129,
      "Customer Name": "Clean Air Env Serv. Santacruz",
      "City": "MUMBAI",
      "__EMPTY_1": "108129_Clean Air Env Serv. Santacruz"
    },
    {
      "Customer Code": 108132,
      "Customer Name": "Car Care Centre. Napean Sea Rd",
      "City": "MUMBAI",
      "__EMPTY_1": "108132_Car Care Centre. Napean Sea Rd"
    },
    {
      "Customer Code": 108134,
      "Customer Name": "Anil Kejriwal - 17 Cha",
      "City": "MUMBAI",
      "__EMPTY_1": "108134_Anil Kejriwal - 17 Cha"
    },
    {
      "Customer Code": 108136,
      "Customer Name": "Cotton Green Service Station",
      "City": "MUMBAI",
      "__EMPTY_1": "108136_Cotton Green Service Station"
    },
    {
      "Customer Code": 108146,
      "Customer Name": "Car Care Centre, Goregaon",
      "City": "MUMBAI",
      "__EMPTY_1": "108146_Car Care Centre, Goregaon"
    },
    {
      "Customer Code": 108160,
      "Customer Name": "Dayaram Santdas & Co. Mumbai",
      "City": "MUMBAI",
      "Amc End": 45338,
      "__EMPTY_1": "108160_Dayaram Santdas & Co. Mumbai"
    },
    {
      "Customer Code": 108161,
      "Customer Name": "DAULAT AUTOMOBILES",
      "City": "MUMBAI",
      "__EMPTY_1": "108161_DAULAT AUTOMOBILES"
    },
    {
      "Customer Code": 108227,
      "Customer Name": "G A Malhotra",
      "City": "MUMBAI",
      "__EMPTY_1": "108227_G A Malhotra"
    },
    {
      "Customer Code": 108229,
      "Customer Name": "GATEWAY AUTO SERVICES",
      "City": "MUMBAI",
      "Amc End": 45276,
      "__EMPTY_1": "108229_GATEWAY AUTO SERVICES"
    },
    {
      "Customer Code": 108235,
      "Customer Name": "Green Mobile PUC, Malad",
      "City": "MUMBAI",
      "__EMPTY_1": "108235_Green Mobile PUC, Malad"
    },
    {
      "Customer Code": 108243,
      "Customer Name": "Highway Automobiles. Bombay",
      "City": "MUMBAI",
      "__EMPTY_1": "108243_Highway Automobiles. Bombay"
    },
    {
      "Customer Code": 108248,
      "Customer Name": "H D PASAD PUC CENTRE.",
      "City": "MUMBAI",
      "Amc End": 45360,
      "__EMPTY_1": "108248_H D PASAD PUC CENTRE."
    },
    {
      "Customer Code": 108249,
      "Customer Name": "HITECH MOBILE PUC CENTRE,",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "108249_HITECH MOBILE PUC CENTRE,"
    },
    {
      "Customer Code": 108266,
      "Customer Name": "I CARPORT,",
      "City": "MUMBAI",
      "Amc End": 45136,
      "__EMPTY_1": "108266_I CARPORT,"
    },
    {
      "Customer Code": 108268,
      "Customer Name": "Ivor Britto & Co. Ghatkopar",
      "City": "MUMBAI",
      "__EMPTY_1": "108268_Ivor Britto & Co. Ghatkopar"
    },
    {
      "Customer Code": 108303,
      "Customer Name": "Jai Mataji Mobile PUC Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "108303_Jai Mataji Mobile PUC Centre"
    },
    {
      "Customer Code": 108320,
      "Customer Name": "Anil Kejriwal - 22Khy",
      "City": "MUMBAI",
      "__EMPTY_1": "108320_Anil Kejriwal - 22Khy"
    },
    {
      "Customer Code": 108328,
      "Customer Name": "K G N Mobile PUC, Goregaon",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "108328_K G N Mobile PUC, Goregaon"
    },
    {
      "Customer Code": 108336,
      "Customer Name": "Lakhbir Automobiles Kalina",
      "City": "MUMBAI",
      "__EMPTY_1": "108336_Lakhbir Automobiles Kalina"
    },
    {
      "Customer Code": 108337,
      "Customer Name": "L N Pujara & Company. Mumbai",
      "City": "MUMBAI",
      "__EMPTY_1": "108337_L N Pujara & Company. Mumbai"
    },
    {
      "Customer Code": 108342,
      "Customer Name": "Laxmi Mobile PUC Cntr,Goregaon",
      "City": "GOREGAON",
      "Amc End": 45252,
      "__EMPTY_1": "108342_Laxmi Mobile PUC Cntr,Goregaon"
    },
    {
      "Customer Code": 108387,
      "Customer Name": "M S R T C - Palghar",
      "City": "PALGHAR",
      "__EMPTY_1": "108387_M S R T C - Palghar"
    },
    {
      "Customer Code": 108400,
      "Customer Name": "MASTAKAR AUTO SERVICE STATION,",
      "City": "MUMBAI",
      "__EMPTY_1": "108400_MASTAKAR AUTO SERVICE STATION,"
    },
    {
      "Customer Code": 108425,
      "Customer Name": "New Bharat Automobiles",
      "City": "MUMBAI",
      "__EMPTY_1": "108425_New Bharat Automobiles"
    },
    {
      "Customer Code": 108453,
      "Customer Name": "Noble Motor Service Stn,HajiAl",
      "City": "MUMBAI",
      "__EMPTY_1": "108453_Noble Motor Service Stn,HajiAl"
    },
    {
      "Customer Code": 108454,
      "Customer Name": "Nitin PUC Centre, Goregaon",
      "City": "MUMBAI",
      "__EMPTY_1": "108454_Nitin PUC Centre, Goregaon"
    },
    {
      "Customer Code": 108465,
      "Customer Name": "OM SAI MOBILE PUC CENTRE - R Maju",
      "City": "MUMBAI",
      "__EMPTY_1": "108465_OM SAI MOBILE PUC CENTRE - R Maju"
    },
    {
      "Customer Code": 108474,
      "Customer Name": "Om Sai Motors Pvt.Ltd.",
      "City": "MUMBAI",
      "Amc End": 45327,
      "__EMPTY_1": "108474_Om Sai Motors Pvt.Ltd."
    },
    {
      "Customer Code": 108485,
      "Customer Name": "Padmakar Mobile PUC Centre",
      "City": "MUMBAI",
      "Amc End": 45294,
      "__EMPTY_1": "108485_Padmakar Mobile PUC Centre"
    },
    {
      "Customer Code": 108490,
      "Customer Name": "Perfect Mobile PUC. Ghatkopar",
      "City": "MUMBAI",
      "__EMPTY_1": "108490_Perfect Mobile PUC. Ghatkopar"
    },
    {
      "Customer Code": 108492,
      "Customer Name": "Pravin & Sons. Ghatkopar",
      "City": "GHATKOPAR",
      "__EMPTY_1": "108492_Pravin & Sons. Ghatkopar"
    },
    {
      "Customer Code": 108507,
      "Customer Name": "Perfect PUC Mobile Van.Gowandi",
      "City": "GHATKOPAR",
      "__EMPTY_1": "108507_Perfect PUC Mobile Van.Gowandi"
    },
    {
      "Customer Code": 108640,
      "Customer Name": "ShreeGanesh PUC Mobil.Goregaon",
      "City": "GOREGAON",
      "__EMPTY_1": "108640_ShreeGanesh PUC Mobil.Goregaon"
    },
    {
      "Customer Code": 108804,
      "Customer Name": "Vaishnavi PUC Mobile. Shyam Arote",
      "City": "MALAD",
      "Amc End": 45108,
      "__EMPTY_1": "108804_Vaishnavi PUC Mobile. Shyam Arote"
    },
    {
      "Customer Code": 109087,
      "Customer Name": "RAUT PUC CENTRE,",
      "City": "MUMBAI",
      "__EMPTY_1": "109087_RAUT PUC CENTRE,"
    },
    {
      "Customer Code": 109328,
      "Customer Name": "A R Merchant PUC Cntr,Borivali",
      "City": "MUMBAI",
      "__EMPTY_1": "109328_A R Merchant PUC Cntr,Borivali"
    },
    {
      "Customer Code": 109329,
      "Customer Name": "Auto Care Centre, HPCL(Sion)",
      "City": "MUMBAI",
      "Amc End": 45392,
      "__EMPTY_1": "109329_Auto Care Centre, HPCL(Sion)"
    },
    {
      "Customer Code": 109333,
      "Customer Name": "Auto Care Centre. Bandra",
      "City": "MUMBAI",
      "__EMPTY_1": "109333_Auto Care Centre. Bandra"
    },
    {
      "Customer Code": 109348,
      "Customer Name": "Anil Kejriwal - 03Ram",
      "City": "MUMBAI",
      "__EMPTY_1": "109348_Anil Kejriwal - 03Ram"
    },
    {
      "Customer Code": 109351,
      "Customer Name": "SRI LAKSHMI NARSIMHA PETROLEUM",
      "City": "PALGHAR",
      "Amc End": 45454,
      "__EMPTY_1": "109351_SRI LAKSHMI NARSIMHA PETROLEUM"
    },
    {
      "Customer Code": 109352,
      "Customer Name": "OM VEDANT PETROLEUM",
      "City": "MUMBAI",
      "Amc End": 45201,
      "__EMPTY_1": "109352_OM VEDANT PETROLEUM"
    },
    {
      "Customer Code": 109353,
      "Customer Name": "OM LAXMI MOBILE PUC CENTRE,",
      "City": "MUMBAI",
      "Amc End": 45112,
      "__EMPTY_1": "109353_OM LAXMI MOBILE PUC CENTRE,"
    },
    {
      "Customer Code": 109385,
      "Customer Name": "SHREELAXMI MOBILE P.U.C. CENTRE,",
      "City": "MUMBAI",
      "Amc End": 45133,
      "__EMPTY_1": "109385_SHREELAXMI MOBILE P.U.C. CENTRE,"
    },
    {
      "Customer Code": 109440,
      "Customer Name": "ROCKY DICOSTA",
      "City": "MUMBAI",
      "__EMPTY_1": "109440_ROCKY DICOSTA"
    },
    {
      "Customer Code": 109441,
      "Customer Name": "Anu Mobile PUC Centre, Goregaon",
      "City": "MUMBAI",
      "Amc End": 45253,
      "__EMPTY_1": "109441_Anu Mobile PUC Centre, Goregaon"
    },
    {
      "Customer Code": 109442,
      "Customer Name": "Taximens Services Ltd, Bandra",
      "City": "MUMBAI",
      "Amc End": 45125,
      "__EMPTY_1": "109442_Taximens Services Ltd, Bandra"
    },
    {
      "Customer Code": 109451,
      "Customer Name": "Anil Kejriwal - 28Uni",
      "City": "MUMBAI",
      "__EMPTY_1": "109451_Anil Kejriwal - 28Uni"
    },
    {
      "Customer Code": 109473,
      "Customer Name": "Super Auto Services. Borivli",
      "City": "MUMBAI",
      "__EMPTY_1": "109473_Super Auto Services. Borivli"
    },
    {
      "Customer Code": 109479,
      "Customer Name": "Jamsons Tyre Services , Parle",
      "City": "MUMBAI",
      "__EMPTY_1": "109479_Jamsons Tyre Services , Parle"
    },
    {
      "Customer Code": 109499,
      "Customer Name": "Anil Kejriwal - 04Vya",
      "City": "MUMBAI",
      "__EMPTY_1": "109499_Anil Kejriwal - 04Vya"
    },
    {
      "Customer Code": 109516,
      "Customer Name": "Shree Sai PUC Center,Deepak Majumdar",
      "City": "MUMBAI",
      "Amc End": 45467,
      "__EMPTY_1": "109516_Shree Sai PUC Center,Deepak Majumdar"
    },
    {
      "Customer Code": 109521,
      "Customer Name": "Anil Kejriwal - 19She",
      "City": "MUMBAI",
      "__EMPTY_1": "109521_Anil Kejriwal - 19She"
    },
    {
      "Customer Code": 109522,
      "Customer Name": "Anil Kejriwal - 20Lax",
      "City": "MUMBAI",
      "Amc End": 45460,
      "__EMPTY_1": "109522_Anil Kejriwal - 20Lax"
    },
    {
      "Customer Code": 109524,
      "Customer Name": "BRITTO MOBILE PUC CENTRE,",
      "City": "MUMBAI",
      "__EMPTY_1": "109524_BRITTO MOBILE PUC CENTRE,"
    },
    {
      "Customer Code": 109525,
      "Customer Name": "Sai Baba Auto Garage",
      "City": "MUMBAI",
      "Amc End": 45146,
      "__EMPTY_1": "109525_Sai Baba Auto Garage"
    },
    {
      "Customer Code": 109528,
      "Customer Name": "Gala Fuel Inj. Service PUC Center,S Arot",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "109528_Gala Fuel Inj. Service PUC Center,S Arot"
    },
    {
      "Customer Code": 109637,
      "Customer Name": "Anil Kejriwal - 06Kir",
      "City": "MUMBAI",
      "__EMPTY_1": "109637_Anil Kejriwal - 06Kir"
    },
    {
      "Customer Code": 109638,
      "Customer Name": "National Petrol Company",
      "City": "MUMBAI",
      "__EMPTY_1": "109638_National Petrol Company"
    },
    {
      "Customer Code": 109639,
      "Customer Name": "Anil Kejriwal - 10Smr",
      "City": "MUMBAI",
      "Amc End": 45446,
      "__EMPTY_1": "109639_Anil Kejriwal - 10Smr"
    },
    {
      "Customer Code": 109640,
      "Customer Name": "S.M. PUC CENTER",
      "City": "MUMBAI",
      "__EMPTY_1": "109640_S.M. PUC CENTER"
    },
    {
      "Customer Code": 109663,
      "Customer Name": "Anil Kejriwal - 16Che",
      "City": "MUMBAI",
      "__EMPTY_1": "109663_Anil Kejriwal - 16Che"
    },
    {
      "Customer Code": 109669,
      "Customer Name": "Bhupesh PUC Center,Palghar",
      "City": "PALGHAR",
      "Amc End": 45398,
      "__EMPTY_1": "109669_Bhupesh PUC Center,Palghar"
    },
    {
      "Customer Code": 109670,
      "Customer Name": "Joaquim Petroleums,Deonar",
      "City": "MUMBAI",
      "__EMPTY_1": "109670_Joaquim Petroleums,Deonar"
    },
    {
      "Customer Code": 109713,
      "Customer Name": "OM SIDDHESHWARI FUEL WORLD",
      "City": "MUMBAI",
      "__EMPTY_1": "109713_OM SIDDHESHWARI FUEL WORLD"
    },
    {
      "Customer Code": 109720,
      "Customer Name": "Anil Kejriwal - 27Jai",
      "City": "MUMBAI",
      "Amc End": 45446,
      "__EMPTY_1": "109720_Anil Kejriwal - 27Jai"
    },
    {
      "Customer Code": 109721,
      "Customer Name": "Anil Kejriwal - 25Par",
      "City": "MUMBAI",
      "Amc End": 45451,
      "__EMPTY_1": "109721_Anil Kejriwal - 25Par"
    },
    {
      "Customer Code": 109734,
      "Customer Name": "K J Somaiya College of Enginering",
      "City": "MUMBAI",
      "__EMPTY_1": "109734_K J Somaiya College of Enginering"
    },
    {
      "Customer Code": 109851,
      "Customer Name": "RADIANT PETROLEUM PRODUCTS PVT. LTD.",
      "City": "MUMBAI",
      "__EMPTY_1": "109851_RADIANT PETROLEUM PRODUCTS PVT. LTD."
    },
    {
      "Customer Code": 109860,
      "Customer Name": "Sandeep Mobile PUC Centre",
      "City": "MUMBAI",
      "Amc End": 45239,
      "__EMPTY_1": "109860_Sandeep Mobile PUC Centre"
    },
    {
      "Customer Code": 109918,
      "Customer Name": "Anil Kejriwal - 30Rad",
      "City": "MUMBAI",
      "Amc End": 45153,
      "__EMPTY_1": "109918_Anil Kejriwal - 30Rad"
    },
    {
      "Customer Code": 109919,
      "Customer Name": "Anil Kejriwal - 31Baj",
      "City": "MUMBAI",
      "Amc End": 45446,
      "__EMPTY_1": "109919_Anil Kejriwal - 31Baj"
    },
    {
      "Customer Code": 109942,
      "Customer Name": "ROYAL SERVICE",
      "City": "MUMBAI",
      "__EMPTY_1": "109942_ROYAL SERVICE"
    },
    {
      "Customer Code": 109943,
      "Customer Name": "MEENAZ MOTORS PUC CENTRE",
      "City": "PALGHAR",
      "Amc End": 45291,
      "__EMPTY_1": "109943_MEENAZ MOTORS PUC CENTRE"
    },
    {
      "Customer Code": 109945,
      "Customer Name": "Kunal Mobile PUC Centre",
      "City": "MULUND",
      "Amc End": 45239,
      "__EMPTY_1": "109945_Kunal Mobile PUC Centre"
    },
    {
      "Customer Code": 109953,
      "Customer Name": "SACHDEVA  AUTOMOBILES",
      "City": "MUMBAI",
      "__EMPTY_1": "109953_SACHDEVA  AUTOMOBILES"
    },
    {
      "Customer Code": 109954,
      "Customer Name": "BON BON SERVICE CETNRE",
      "City": "MUMBAI",
      "__EMPTY_1": "109954_BON BON SERVICE CETNRE"
    },
    {
      "Customer Code": 109963,
      "Customer Name": "Gulati Service Centre.Vikhroli",
      "City": "MUMBAI",
      "__EMPTY_1": "109963_Gulati Service Centre.Vikhroli"
    },
    {
      "Customer Code": 109968,
      "Customer Name": "Mayuresh PUC Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "109968_Mayuresh PUC Centre"
    },
    {
      "Customer Code": 110039,
      "Customer Name": "Mumbai Taxi Asso Co-op. Consumer soc lt",
      "City": "MUMBAI",
      "Amc End": 45289,
      "__EMPTY_1": "110039_Mumbai Taxi Asso Co-op. Consumer soc lt"
    },
    {
      "Customer Code": 110096,
      "Customer Name": "Dipti Petroleum",
      "City": "MUMBAI",
      "__EMPTY_1": "110096_Dipti Petroleum"
    },
    {
      "Customer Code": 110132,
      "Customer Name": "TAXIMENS SERVICE LTD",
      "City": "MUMBAI",
      "__EMPTY_1": "110132_TAXIMENS SERVICE LTD"
    },
    {
      "Customer Code": 110142,
      "Customer Name": "VIRANI AUTOMOBILES (NITIN SAWANT)",
      "City": "MUMBAI",
      "Amc End": 45110,
      "__EMPTY_1": "110142_VIRANI AUTOMOBILES (NITIN SAWANT)"
    },
    {
      "Customer Code": 110161,
      "Customer Name": "DHUMAL P.U.C. CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "110161_DHUMAL P.U.C. CENTRE"
    },
    {
      "Customer Code": 110162,
      "Customer Name": "NEW KAMPALA SEVICE STATION",
      "City": "MUMBAI",
      "__EMPTY_1": "110162_NEW KAMPALA SEVICE STATION"
    },
    {
      "Customer Code": 110210,
      "Customer Name": "HP COCO, BANDRA",
      "City": "BANDRA",
      "__EMPTY_1": "110210_HP COCO, BANDRA"
    },
    {
      "Customer Code": 110262,
      "Customer Name": "WESTERN  INDIA AUTOMOBILE ASSOCIATION",
      "City": "MUMBAI",
      "Amc End": 45322,
      "__EMPTY_1": "110262_WESTERN  INDIA AUTOMOBILE ASSOCIATION"
    },
    {
      "Customer Code": 110272,
      "Customer Name": "KAPADIA BROS. PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "110272_KAPADIA BROS. PUC CENTRE"
    },
    {
      "Customer Code": 110274,
      "Customer Name": "DEV MOTOR CARE PRIVATE LIMITED",
      "City": "MUMBAI",
      "__EMPTY_1": "110274_DEV MOTOR CARE PRIVATE LIMITED"
    },
    {
      "Customer Code": 110299,
      "Customer Name": "AUTOMOBILE CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "110299_AUTOMOBILE CENTRE"
    },
    {
      "Customer Code": 110301,
      "Customer Name": "Anil Kejriwal - 24Sha",
      "City": "MUMBAI",
      "Amc End": 45153,
      "__EMPTY_1": "110301_Anil Kejriwal - 24Sha"
    },
    {
      "Customer Code": 110307,
      "Customer Name": "Anil Kejriwal - 29Mah",
      "City": "MUMBAI",
      "__EMPTY_1": "110307_Anil Kejriwal - 29Mah"
    },
    {
      "Customer Code": 110337,
      "Customer Name": "SHREE SIDDHIVINAYAKA SERVICE STATION",
      "City": "MUMBAI",
      "__EMPTY_1": "110337_SHREE SIDDHIVINAYAKA SERVICE STATION"
    },
    {
      "Customer Code": 110339,
      "Customer Name": "VIKRAM AUTO SERVICES",
      "City": "MUMBAI",
      "Amc End": 45273,
      "__EMPTY_1": "110339_VIKRAM AUTO SERVICES"
    },
    {
      "Customer Code": 110341,
      "Customer Name": "JAYA AUTO SERVICES (R MAJUMDAR)",
      "City": "MUMBAI",
      "Amc End": 45258,
      "__EMPTY_1": "110341_JAYA AUTO SERVICES (R MAJUMDAR)"
    },
    {
      "Customer Code": 110342,
      "Customer Name": "FORT MOTOR EQUIPMENT CO.,",
      "City": "MUMBAI",
      "Amc End": 45249,
      "__EMPTY_1": "110342_FORT MOTOR EQUIPMENT CO.,"
    },
    {
      "Customer Code": 110360,
      "Customer Name": "BHARAT MOBILE PUC CENTRE",
      "City": "MULUND",
      "__EMPTY_1": "110360_BHARAT MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 110366,
      "Customer Name": "AMY MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "110366_AMY MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 110385,
      "Customer Name": "Anil Kejriwal - 33Gir",
      "City": "MUMBAI",
      "Amc End": 45446,
      "__EMPTY_1": "110385_Anil Kejriwal - 33Gir"
    },
    {
      "Customer Code": 110405,
      "Customer Name": "HPCL COCO,BANDRA",
      "City": "BANDRA",
      "__EMPTY_1": "110405_HPCL COCO,BANDRA"
    },
    {
      "Customer Code": 110407,
      "Customer Name": "Anil Kejriwal - 35Hig",
      "City": "MUMBAI",
      "Amc End": 45451,
      "__EMPTY_1": "110407_Anil Kejriwal - 35Hig"
    },
    {
      "Customer Code": 110408,
      "Customer Name": "Anil Kejriwal - 34Shi",
      "City": "MUMBAI",
      "Amc End": 45451,
      "__EMPTY_1": "110408_Anil Kejriwal - 34Shi"
    },
    {
      "Customer Code": 110409,
      "Customer Name": "Anil Kejriwal - 32Shr",
      "City": "MUMBAI",
      "Amc End": 45451,
      "__EMPTY_1": "110409_Anil Kejriwal - 32Shr"
    },
    {
      "Customer Code": 110412,
      "Customer Name": "Anil Kejriwal - 18Sur",
      "City": "MUMBAI",
      "Amc End": 45463,
      "__EMPTY_1": "110412_Anil Kejriwal - 18Sur"
    },
    {
      "Customer Code": 110413,
      "Customer Name": "Anil Kejriwal - 09Mah",
      "City": "MUMBAI",
      "Amc End": 45463,
      "__EMPTY_1": "110413_Anil Kejriwal - 09Mah"
    },
    {
      "Customer Code": 110414,
      "Customer Name": "Anil Kejriwal - 01JAG",
      "City": "MUMBAI",
      "Amc End": 45456,
      "__EMPTY_1": "110414_Anil Kejriwal - 01JAG"
    },
    {
      "Customer Code": 110427,
      "Customer Name": "HODIWALA  BHATHENA & CO.",
      "City": "MUMBAI",
      "__EMPTY_1": "110427_HODIWALA  BHATHENA & CO."
    },
    {
      "Customer Code": 110511,
      "Customer Name": "Naval Dockyard",
      "City": "MUMBAI",
      "__EMPTY_1": "110511_Naval Dockyard"
    },
    {
      "Customer Code": 110529,
      "Customer Name": "SWATI PUC CENTRE (GOVIND NANDA)",
      "City": "PALGHAR",
      "__EMPTY_1": "110529_SWATI PUC CENTRE (GOVIND NANDA)"
    },
    {
      "Customer Code": 110538,
      "Customer Name": "SANJIV SERVICE STATION",
      "City": "MUMBAI",
      "Amc End": 45453,
      "__EMPTY_1": "110538_SANJIV SERVICE STATION"
    },
    {
      "Customer Code": 110539,
      "Customer Name": "GREEN MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "110539_GREEN MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 110544,
      "Customer Name": "Gajanan PUC Centre",
      "City": "PALGHAR",
      "__EMPTY_1": "110544_Gajanan PUC Centre"
    },
    {
      "Customer Code": 111452,
      "Customer Name": "Anil Kejriwal - 26Omk",
      "City": "MUMBAI",
      "__EMPTY_1": "111452_Anil Kejriwal - 26Omk"
    },
    {
      "Customer Code": 111453,
      "Customer Name": "GAJANAN PUC CENTRE,WORLI",
      "City": "MUMBAI",
      "__EMPTY_1": "111453_GAJANAN PUC CENTRE,WORLI"
    },
    {
      "Customer Code": 111461,
      "Customer Name": "GREEN CHECK MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "Amc End": 45392,
      "__EMPTY_1": "111461_GREEN CHECK MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 111479,
      "Customer Name": "AASTHA SERVICE CENTRE",
      "City": "PALGHAR",
      "__EMPTY_1": "111479_AASTHA SERVICE CENTRE"
    },
    {
      "Customer Code": 111515,
      "Customer Name": "Swati PUC Centre",
      "City": "MUMBAI",
      "Amc End": 45286,
      "__EMPTY_1": "111515_Swati PUC Centre"
    },
    {
      "Customer Code": 111523,
      "Customer Name": "VAIBHAVSAI PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "111523_VAIBHAVSAI PUC CENTRE"
    },
    {
      "Customer Code": 111529,
      "Customer Name": "SAMBODHI PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "111529_SAMBODHI PUC CENTRE"
    },
    {
      "Customer Code": 111532,
      "Customer Name": "LUCKY  AUTO",
      "City": "MUMBAI",
      "__EMPTY_1": "111532_LUCKY  AUTO"
    },
    {
      "Customer Code": 111535,
      "Customer Name": "SUPER  SERVICE  STATION",
      "City": "MUMBAI",
      "__EMPTY_1": "111535_SUPER  SERVICE  STATION"
    },
    {
      "Customer Code": 111555,
      "Customer Name": "UMA PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "111555_UMA PUC CENTRE"
    },
    {
      "Customer Code": 111579,
      "Customer Name": "PALGHAR MOTOR DRIVING SCHOOL,",
      "City": "PALGHAR",
      "Amc End": 45108,
      "__EMPTY_1": "111579_PALGHAR MOTOR DRIVING SCHOOL,"
    },
    {
      "Customer Code": 111608,
      "Customer Name": "MAHADEV PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "VASAI",
      "Amc End": 45236,
      "__EMPTY_1": "111608_MAHADEV PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111645,
      "Customer Name": "VIGNHARAJ PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "111645_VIGNHARAJ PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111653,
      "Customer Name": "J.Y. AUTO  PARTS\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "111653_J.Y. AUTO  PARTS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111687,
      "Customer Name": "DEEPAK MOTOR TRAINING SCHOOL\t\t\t\t\t\t\t\t\t",
      "City": "PALGHAR",
      "Amc End": 45309,
      "__EMPTY_1": "111687_DEEPAK MOTOR TRAINING SCHOOL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111704,
      "Customer Name": "Royal Service",
      "City": "MUMBAI",
      "__EMPTY_1": "111704_Royal Service"
    },
    {
      "Customer Code": 111706,
      "Customer Name": "SHREE RAM PUC CENTRE - NSawant",
      "City": "MUMBAI",
      "Amc End": 45278,
      "__EMPTY_1": "111706_SHREE RAM PUC CENTRE - NSawant"
    },
    {
      "Customer Code": 111721,
      "Customer Name": "HIND AUTOMOBILES",
      "City": "MUMBAI",
      "__EMPTY_1": "111721_HIND AUTOMOBILES"
    },
    {
      "Customer Code": 111729,
      "Customer Name": "Anil Kejriwal - 21Sid",
      "City": "MUMBAI",
      "__EMPTY_1": "111729_Anil Kejriwal - 21Sid"
    },
    {
      "Customer Code": 111769,
      "Customer Name": "Anil Kejriwal - 12Kar",
      "City": "MUMBAI",
      "Amc End": 45444,
      "__EMPTY_1": "111769_Anil Kejriwal - 12Kar"
    },
    {
      "Customer Code": 111828,
      "Customer Name": "Anil Kejriwal - 15Gaj",
      "City": "MUMBAI",
      "__EMPTY_1": "111828_Anil Kejriwal - 15Gaj"
    },
    {
      "Customer Code": 111830,
      "Customer Name": "Kiran PUC Centre",
      "City": "MUMBAI",
      "__EMPTY_1": "111830_Kiran PUC Centre"
    },
    {
      "Customer Code": 111854,
      "Customer Name": "Mumbai Taxi Asso Co-op. Consumer soc Ltd",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "111854_Mumbai Taxi Asso Co-op. Consumer soc Ltd"
    },
    {
      "Customer Code": 111857,
      "Customer Name": "GREEN GLOBE  ENTERPRISES R MAJU\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "111857_GREEN GLOBE  ENTERPRISES R MAJU\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111914,
      "Customer Name": "Anil Kejriwal - 13Sai",
      "City": "MUMBAI",
      "__EMPTY_1": "111914_Anil Kejriwal - 13Sai"
    },
    {
      "Customer Code": 111917,
      "Customer Name": "Jamsons",
      "City": "MUMBAI",
      "__EMPTY_1": "111917_Jamsons"
    },
    {
      "Customer Code": 111962,
      "Customer Name": "SHRI SAI P.U.C. CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "111962_SHRI SAI P.U.C. CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111978,
      "Customer Name": "GO GREEN MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "Amc End": 45403,
      "__EMPTY_1": "111978_GO GREEN MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 130132,
      "Customer Name": "STAR MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130132_STAR MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130179,
      "Customer Name": "CHAUDHARY KOLTE ONLINE  PUC CENTRE",
      "City": "BHIWANDI",
      "Amc End": 45265,
      "__EMPTY_1": "130179_CHAUDHARY KOLTE ONLINE  PUC CENTRE"
    },
    {
      "Customer Code": 130201,
      "Customer Name": "Har Har Mahadev PUC Centre",
      "City": "VASAI",
      "Amc End": 45461,
      "__EMPTY_1": "130201_Har Har Mahadev PUC Centre"
    },
    {
      "Customer Code": 130202,
      "Customer Name": "AV ASSOCIATES & CONSULTANT",
      "City": "MUMBAI",
      "__EMPTY_1": "130202_AV ASSOCIATES & CONSULTANT"
    },
    {
      "Customer Code": 130226,
      "Customer Name": "MAHALAXMI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PALGHAR",
      "Amc End": 45303,
      "__EMPTY_1": "130226_MAHALAXMI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130231,
      "Customer Name": "Online Chaudhary Kolte PUC Centre",
      "City": "PADGHA",
      "__EMPTY_1": "130231_Online Chaudhary Kolte PUC Centre"
    },
    {
      "Customer Code": 130236,
      "Customer Name": "OM SAI MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "Amc End": 45250,
      "__EMPTY_1": "130236_OM SAI MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 130243,
      "Customer Name": "GREEN GLOBE ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130243_GREEN GLOBE ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130245,
      "Customer Name": "DEV MOTOR  CARE PUC CENTRE-R MAJ\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "Amc End": 45220,
      "__EMPTY_1": "130245_DEV MOTOR  CARE PUC CENTRE-R MAJ\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130255,
      "Customer Name": "SAI RIDDHI  PUC  CENTRE (RM)\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130255_SAI RIDDHI  PUC  CENTRE (RM)\t"
    },
    {
      "Customer Code": 130259,
      "Customer Name": "SUMEGHA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PALGHAR",
      "__EMPTY_1": "130259_SUMEGHA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130297,
      "Customer Name": "Satish PUC Center",
      "City": "MUMBAI",
      "__EMPTY_1": "130297_Satish PUC Center"
    },
    {
      "Customer Code": 130304,
      "Customer Name": "Asif Abdul Latik Kurawale",
      "City": "CHIPLUN",
      "Amc End": 45274,
      "__EMPTY_1": "130304_Asif Abdul Latik Kurawale"
    },
    {
      "Customer Code": 130325,
      "Customer Name": "PATIL SERVICE  STATION\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "Amc End": 45299,
      "__EMPTY_1": "130325_PATIL SERVICE  STATION\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130334,
      "Customer Name": "MAHESH MOBILE PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "130334_MAHESH MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 130410,
      "Customer Name": "OTARI ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "CHIPLUN",
      "Amc End": 45462,
      "__EMPTY_1": "130410_OTARI ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130411,
      "Customer Name": "PRATHAMESH PUC CENTER\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130411_PRATHAMESH PUC CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130416,
      "Customer Name": "JASRAJ PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PALGHAR",
      "__EMPTY_1": "130416_JASRAJ PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130418,
      "Customer Name": "TANISHA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130418_TANISHA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130475,
      "Customer Name": "PRABHA ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "Amc End": 45117,
      "__EMPTY_1": "130475_PRABHA ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130493,
      "Customer Name": "VAIBHAV LAKSHMI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "Amc End": 45327,
      "__EMPTY_1": "130493_VAIBHAV LAKSHMI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130560,
      "Customer Name": "MAYUR PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MUMBAI",
      "__EMPTY_1": "130560_MAYUR PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130615,
      "Customer Name": "SHREE PUC CENTRE",
      "City": "PALGHAR",
      "__EMPTY_1": "130615_SHREE PUC CENTRE"
    },
    {
      "Customer Code": 130643,
      "Customer Name": "TEJAS PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "130643_TEJAS PUC CENTRE"
    },
    {
      "Customer Code": 130684,
      "Customer Name": "ANU AUTO PARTS MOBILE PUC CENTER",
      "City": "MUMBAI",
      "Amc End": 45253,
      "__EMPTY_1": "130684_ANU AUTO PARTS MOBILE PUC CENTER"
    },
    {
      "Customer Code": 130736,
      "Customer Name": "Poonam PUC Centre",
      "City": "MUMBAI",
      "Amc End": 45145,
      "__EMPTY_1": "130736_Poonam PUC Centre"
    },
    {
      "Customer Code": 130765,
      "Customer Name": "SAI PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "130765_SAI PUC CENTRE"
    },
    {
      "Customer Code": 130777,
      "Customer Name": "Luck Marine",
      "City": "MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "130777_Luck Marine"
    },
    {
      "Customer Code": 130869,
      "Customer Name": "SHREE SHIV CHATRAPATI PUC CENTRE\t\t\t\t\t\t\t\t",
      "City": "GHATKOPAR",
      "__EMPTY_1": "130869_SHREE SHIV CHATRAPATI PUC CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130933,
      "Customer Name": "ONLINE ASHIRWAD PUC CENTRE(NITIN SAWANT)",
      "City": "VIKHROLI",
      "__EMPTY_1": "130933_ONLINE ASHIRWAD PUC CENTRE(NITIN SAWANT)"
    },
    {
      "Customer Code": 130954,
      "Customer Name": "AUTOMOBILES PUC CENTRE",
      "City": "MUMBAI",
      "__EMPTY_1": "130954_AUTOMOBILES PUC CENTRE"
    },
    {
      "Customer Code": 130998,
      "Customer Name": "Online Kulswami PUC Centre",
      "City": "VASAI",
      "__EMPTY_1": "130998_Online Kulswami PUC Centre"
    },
    {
      "Customer Code": 131005,
      "Customer Name": "Poonam PUC centre",
      "City": "MUMBAI",
      "__EMPTY_1": "131005_Poonam PUC centre"
    },
    {
      "Customer Code": 131014,
      "Customer Name": "DIVINE MOBILE MOBILE PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "131014_DIVINE MOBILE MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 131162,
      "Customer Name": "MAHANAGAR GAS LIMITED",
      "City": "BANDRA",
      "__EMPTY_1": "131162_MAHANAGAR GAS LIMITED"
    },
    {
      "Customer Code": 108054,
      "Customer Name": "Akshata Mobile PUC",
      "City": "DAPOLI",
      "Amc End": 45323,
      "__EMPTY_1": "108054_Akshata Mobile PUC"
    },
    {
      "Customer Code": 108061,
      "Customer Name": "Autowings PUC Centre, Pimpri",
      "City": "PIMPRI",
      "__EMPTY_1": "108061_Autowings PUC Centre, Pimpri"
    },
    {
      "Customer Code": 108093,
      "Customer Name": "Bharat Agencies. Shirampur",
      "City": "SHRIRAMPUR",
      "__EMPTY_1": "108093_Bharat Agencies. Shirampur"
    },
    {
      "Customer Code": 108213,
      "Customer Name": "Girish Automation Systems P L",
      "City": "PIMPRI",
      "__EMPTY_1": "108213_Girish Automation Systems P L"
    },
    {
      "Customer Code": 108230,
      "Customer Name": "Gade Patil Agencies.Rahuri",
      "City": "AHMEDNAGAR",
      "__EMPTY_1": "108230_Gade Patil Agencies.Rahuri"
    },
    {
      "Customer Code": 108301,
      "Customer Name": "Jagdale PUC Testing Centre",
      "City": "SATARA",
      "Amc End": 45461,
      "__EMPTY_1": "108301_Jagdale PUC Testing Centre"
    },
    {
      "Customer Code": 108325,
      "Customer Name": "Khandelwal Automobiles PUC Cnt",
      "City": "JALNA",
      "Amc End": 45313,
      "__EMPTY_1": "108325_Khandelwal Automobiles PUC Cnt"
    },
    {
      "Customer Code": 108352,
      "Customer Name": "Latkar Mobile PUC Centre",
      "City": "KARAD",
      "Amc End": 45369,
      "__EMPTY_1": "108352_Latkar Mobile PUC Centre"
    },
    {
      "Customer Code": 108374,
      "Customer Name": "M S R T C. Dapodi Pune.",
      "City": "PUNE",
      "__EMPTY_1": "108374_M S R T C. Dapodi Pune."
    },
    {
      "Customer Code": 108378,
      "Customer Name": "Metro Motor Driving School",
      "City": "KARAD",
      "Amc End": 45155,
      "__EMPTY_1": "108378_Metro Motor Driving School"
    },
    {
      "Customer Code": 108390,
      "Customer Name": "M S R T C - Baramati",
      "City": "BARAMATI",
      "__EMPTY_1": "108390_M S R T C - Baramati"
    },
    {
      "Customer Code": 108407,
      "Customer Name": "Mayur Agencies, Srirampur",
      "City": "SHRIRAMPUR",
      "Amc End": 45336,
      "__EMPTY_1": "108407_Mayur Agencies, Srirampur"
    },
    {
      "Customer Code": 108415,
      "Customer Name": "Maharashtra Multi Serv.Mobile",
      "City": "AURANGABAD",
      "__EMPTY_1": "108415_Maharashtra Multi Serv.Mobile"
    },
    {
      "Customer Code": 108475,
      "Customer Name": "Osmanabad PUC Centre",
      "City": "OSMANABAD",
      "Amc End": 45460,
      "__EMPTY_1": "108475_Osmanabad PUC Centre"
    },
    {
      "Customer Code": 108505,
      "Customer Name": "Padmavati Automobiles,Sangamnr",
      "City": "AURANGABAD",
      "Amc End": 45153,
      "__EMPTY_1": "108505_Padmavati Automobiles,Sangamnr"
    },
    {
      "Customer Code": 108512,
      "Customer Name": "Patwardhan PUC Centre",
      "City": "SATARA",
      "Amc End": 45250,
      "__EMPTY_1": "108512_Patwardhan PUC Centre"
    },
    {
      "Customer Code": 108541,
      "Customer Name": "Rajendra Automobiles",
      "City": "JALNA",
      "__EMPTY_1": "108541_Rajendra Automobiles"
    },
    {
      "Customer Code": 108620,
      "Customer Name": "S K PUC Centre. Pune",
      "City": "PUNE",
      "__EMPTY_1": "108620_S K PUC Centre. Pune"
    },
    {
      "Customer Code": 108663,
      "Customer Name": "Samarth PUC Centre. Osmanabad",
      "City": "OSMANABAD",
      "__EMPTY_1": "108663_Samarth PUC Centre. Osmanabad"
    },
    {
      "Customer Code": 108709,
      "Customer Name": "Shree Gajanand PUC Centre.Jalna",
      "City": "JALNA",
      "Amc End": 45108,
      "__EMPTY_1": "108709_Shree Gajanand PUC Centre.Jalna"
    },
    {
      "Customer Code": 109040,
      "Customer Name": "TUSHAR M WADKE/MR.ARJUN KUNDKAR",
      "City": "PUNE",
      "Amc End": 45299,
      "__EMPTY_1": "109040_TUSHAR M WADKE/MR.ARJUN KUNDKAR"
    },
    {
      "Customer Code": 109070,
      "Customer Name": "SANJIVANI EDUCATION SOCIETY'S",
      "City": "KOPARGAON",
      "__EMPTY_1": "109070_SANJIVANI EDUCATION SOCIETY'S"
    },
    {
      "Customer Code": 109274,
      "Customer Name": "SARASWATI AGENCIES",
      "City": "PUNE",
      "Amc End": 45209,
      "__EMPTY_1": "109274_SARASWATI AGENCIES"
    },
    {
      "Customer Code": 109427,
      "Customer Name": "SANJIVANI RURAL EDUCATION SOCIETY'S",
      "City": "KOPARGAON",
      "__EMPTY_1": "109427_SANJIVANI RURAL EDUCATION SOCIETY'S"
    },
    {
      "Customer Code": 109728,
      "Customer Name": "Chavan Pollution Centre",
      "City": "PUNE",
      "__EMPTY_1": "109728_Chavan Pollution Centre"
    },
    {
      "Customer Code": 109808,
      "Customer Name": "SAURABH P.U.C. CENTRE",
      "City": "PUNE",
      "Amc End": 45201,
      "__EMPTY_1": "109808_SAURABH P.U.C. CENTRE"
    },
    {
      "Customer Code": 109915,
      "Customer Name": "MAULI MOTOR DRIVING SCHOOL",
      "City": " KHANDALA",
      "__EMPTY_1": "109915_MAULI MOTOR DRIVING SCHOOL"
    },
    {
      "Customer Code": 109930,
      "Customer Name": "Sangam PUC Center",
      "City": "SATARA",
      "Amc End": 45200,
      "__EMPTY_1": "109930_Sangam PUC Center"
    },
    {
      "Customer Code": 109999,
      "Customer Name": "Mangal Jyoti Agencies",
      "City": "SHRIRAMPUR",
      "__EMPTY_1": "109999_Mangal Jyoti Agencies"
    },
    {
      "Customer Code": 110019,
      "Customer Name": "SHRUTI PUC CENTRE, BHOSALE",
      "City": "SATARA",
      "Amc End": 45453,
      "__EMPTY_1": "110019_SHRUTI PUC CENTRE, BHOSALE"
    },
    {
      "Customer Code": 110084,
      "Customer Name": "Sai Balaji Puc Centre",
      "City": "SATARA",
      "__EMPTY_1": "110084_Sai Balaji Puc Centre"
    },
    {
      "Customer Code": 110136,
      "Customer Name": "SHALU AGENCY",
      "City": "PUNE",
      "Amc End": 45206,
      "__EMPTY_1": "110136_SHALU AGENCY"
    },
    {
      "Customer Code": 110169,
      "Customer Name": "VINAYAK PUC CENTRE",
      "City": "KARAD",
      "__EMPTY_1": "110169_VINAYAK PUC CENTRE"
    },
    {
      "Customer Code": 110219,
      "Customer Name": "SANGAM PUC CENTRE",
      "City": "SATARA",
      "__EMPTY_1": "110219_SANGAM PUC CENTRE"
    },
    {
      "Customer Code": 110220,
      "Customer Name": "SANGAM MOBILE PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45460,
      "__EMPTY_1": "110220_SANGAM MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 110221,
      "Customer Name": "SANGAM PUC CENTRE, KARAD",
      "City": "KARAD",
      "__EMPTY_1": "110221_SANGAM PUC CENTRE, KARAD"
    },
    {
      "Customer Code": 110241,
      "Customer Name": "D.R. Ghavane Agencies, Pune",
      "City": "PUNE",
      "Amc End": 45337,
      "__EMPTY_1": "110241_D.R. Ghavane Agencies, Pune"
    },
    {
      "Customer Code": 110348,
      "Customer Name": "ATHARAV PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45294,
      "__EMPTY_1": "110348_ATHARAV PUC CENTRE"
    },
    {
      "Customer Code": 110456,
      "Customer Name": "SHREE KUMAR P.U.C. CENTRE",
      "City": "SATARA",
      "Amc End": 45160,
      "__EMPTY_1": "110456_SHREE KUMAR P.U.C. CENTRE"
    },
    {
      "Customer Code": 110467,
      "Customer Name": "SAEE PUC CENTRE",
      "City": "PHALTAN",
      "Amc End": 45329,
      "__EMPTY_1": "110467_SAEE PUC CENTRE"
    },
    {
      "Customer Code": 110472,
      "Customer Name": "Shri  Hari PUC Centre",
      "City": "PHALTAN",
      "__EMPTY_1": "110472_Shri  Hari PUC Centre"
    },
    {
      "Customer Code": 110473,
      "Customer Name": "Nageshwar PUC Centre",
      "City": "SATARA",
      "__EMPTY_1": "110473_Nageshwar PUC Centre"
    },
    {
      "Customer Code": 110474,
      "Customer Name": "New Sangam PUC Centre",
      "City": "KARAD",
      "__EMPTY_1": "110474_New Sangam PUC Centre"
    },
    {
      "Customer Code": 110475,
      "Customer Name": "VIRAJ PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45447,
      "__EMPTY_1": "110475_VIRAJ PUC CENTRE"
    },
    {
      "Customer Code": 110490,
      "Customer Name": "SANGAM PUC CENTRE",
      "City": "KARAD",
      "Amc End": 45208,
      "__EMPTY_1": "110490_SANGAM PUC CENTRE"
    },
    {
      "Customer Code": 110534,
      "Customer Name": "GANESH  MOBILE  PUC  CENTRE",
      "City": "PUNE",
      "__EMPTY_1": "110534_GANESH  MOBILE  PUC  CENTRE"
    },
    {
      "Customer Code": 110537,
      "Customer Name": "THE AUTOMOTIVE RES. ASSCN OF IINDIA",
      "City": "PUNE",
      "__EMPTY_1": "110537_THE AUTOMOTIVE RES. ASSCN OF IINDIA"
    },
    {
      "Customer Code": 111433,
      "Customer Name": "MARATHWADA PUC CENTRE",
      "City": "AURANGABAD",
      "Amc End": 45322,
      "__EMPTY_1": "111433_MARATHWADA PUC CENTRE"
    },
    {
      "Customer Code": 111445,
      "Customer Name": "Ashtavinayak PUC Centre",
      "City": " KHANDALA",
      "Amc End": 45471,
      "__EMPTY_1": "111445_Ashtavinayak PUC Centre"
    },
    {
      "Customer Code": 111469,
      "Customer Name": "SHRI JARANDESHWAR PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45325,
      "__EMPTY_1": "111469_SHRI JARANDESHWAR PUC CENTRE"
    },
    {
      "Customer Code": 111470,
      "Customer Name": "LAXMI PUC  CENTRE, PUNE",
      "City": "PUNE",
      "Amc End": 45108,
      "__EMPTY_1": "111470_LAXMI PUC  CENTRE, PUNE"
    },
    {
      "Customer Code": 111473,
      "Customer Name": "CAR & CARZ PUC CENTRE",
      "City": "AURANGABAD",
      "__EMPTY_1": "111473_CAR & CARZ PUC CENTRE"
    },
    {
      "Customer Code": 111493,
      "Customer Name": "TOP CARS",
      "City": "SATARA",
      "__EMPTY_1": "111493_TOP CARS"
    },
    {
      "Customer Code": 111504,
      "Customer Name": "Shree Services PUC Centre",
      "City": "AURANGABAD",
      "__EMPTY_1": "111504_Shree Services PUC Centre"
    },
    {
      "Customer Code": 111518,
      "Customer Name": "METRO DRIVING SCHOOL",
      "City": "SATARA",
      "Amc End": 45320,
      "__EMPTY_1": "111518_METRO DRIVING SCHOOL"
    },
    {
      "Customer Code": 111524,
      "Customer Name": "SAI BALAJI PUC CENTRE",
      "City": "AURANGABAD",
      "Amc End": 45337,
      "__EMPTY_1": "111524_SAI BALAJI PUC CENTRE"
    },
    {
      "Customer Code": 111536,
      "Customer Name": "SHREE GANESH PUC CENTRE, AURANGABAD",
      "City": "AURANGABAD",
      "__EMPTY_1": "111536_SHREE GANESH PUC CENTRE, AURANGABAD"
    },
    {
      "Customer Code": 111540,
      "Customer Name": "RANRAJ PUC CENTRE",
      "City": "KARAD",
      "Amc End": 45227,
      "__EMPTY_1": "111540_RANRAJ PUC CENTRE"
    },
    {
      "Customer Code": 111543,
      "Customer Name": "SHREEYASH  PRATISHTHAN",
      "City": "AURANGABAD",
      "__EMPTY_1": "111543_SHREEYASH  PRATISHTHAN"
    },
    {
      "Customer Code": 111561,
      "Customer Name": "IQBAL ISMAIL PATWEKAR",
      "City": "SATARA",
      "__EMPTY_1": "111561_IQBAL ISMAIL PATWEKAR"
    },
    {
      "Customer Code": 111573,
      "Customer Name": "MOMIM PUC CENTRE",
      "City": "JALNA",
      "Amc End": 45134,
      "__EMPTY_1": "111573_MOMIM PUC CENTRE"
    },
    {
      "Customer Code": 111602,
      "Customer Name": "NITIN SHANTARAM SAWANT\t\t\t",
      "City": "PUNE",
      "Amc End": 45108,
      "__EMPTY_1": "111602_NITIN SHANTARAM SAWANT\t\t\t"
    },
    {
      "Customer Code": 111604,
      "Customer Name": "MAHALAKSHMI  LOGISTICS\t\t\t",
      "City": "AURANGABAD",
      "Amc End": 45335,
      "__EMPTY_1": "111604_MAHALAKSHMI  LOGISTICS\t\t\t"
    },
    {
      "Customer Code": 111620,
      "Customer Name": "VAIBHAV  PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AURANGABAD",
      "__EMPTY_1": "111620_VAIBHAV  PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111625,
      "Customer Name": "TRIMURTI  PUC  CENTRE",
      "City": "SATARA",
      "Amc End": 45132,
      "__EMPTY_1": "111625_TRIMURTI  PUC  CENTRE"
    },
    {
      "Customer Code": 111638,
      "Customer Name": "VIRAJ PUC  CENTRE,WAI",
      "City": "SATARA",
      "__EMPTY_1": "111638_VIRAJ PUC  CENTRE,WAI"
    },
    {
      "Customer Code": 111650,
      "Customer Name": "NEW POONA AUTO  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AURANGABAD",
      "__EMPTY_1": "111650_NEW POONA AUTO  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111677,
      "Customer Name": "PATWARDHAN PUC CENTRE, VISHAVA\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "Amc End": 45250,
      "__EMPTY_1": "111677_PATWARDHAN PUC CENTRE, VISHAVA\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111678,
      "Customer Name": "PATWARDHAN PUC CENTRE, SHAHUPURI",
      "City": "SATARA",
      "Amc End": 45250,
      "__EMPTY_1": "111678_PATWARDHAN PUC CENTRE, SHAHUPURI"
    },
    {
      "Customer Code": 111692,
      "Customer Name": "AUTO ASSIST RECON INDIA PVT. LTD.\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "111692_AUTO ASSIST RECON INDIA PVT. LTD.\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111695,
      "Customer Name": "I.K. ASSOCIATES\t\t\t\t\t\t\t\t\t",
      "City": "AHMEDNAGAR",
      "__EMPTY_1": "111695_I.K. ASSOCIATES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111696,
      "Customer Name": "SIDHAKALA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "Amc End": 45300,
      "__EMPTY_1": "111696_SIDHAKALA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111705,
      "Customer Name": "S. B. Motors, Bhosale",
      "City": "SATARA",
      "__EMPTY_1": "111705_S. B. Motors, Bhosale"
    },
    {
      "Customer Code": 111801,
      "Customer Name": "AMK Puc Centre",
      "City": "AURANGABAD",
      "__EMPTY_1": "111801_AMK Puc Centre"
    },
    {
      "Customer Code": 111831,
      "Customer Name": "SHREE KRISHNA PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45161,
      "__EMPTY_1": "111831_SHREE KRISHNA PUC CENTRE"
    },
    {
      "Customer Code": 111835,
      "Customer Name": "ANUSHKA  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "111835_ANUSHKA  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111840,
      "Customer Name": "BHARAT PUC CENTRE, JALNA\t\t\t\t\t\t\t",
      "City": "JALNA",
      "Amc End": 45278,
      "__EMPTY_1": "111840_BHARAT PUC CENTRE, JALNA\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111852,
      "Customer Name": "MANER PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "Amc End": 45337,
      "__EMPTY_1": "111852_MANER PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111859,
      "Customer Name": "JAY HANUMAN PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "111859_JAY HANUMAN PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111913,
      "Customer Name": "VIRAJ PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "__EMPTY_1": "111913_VIRAJ PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111958,
      "Customer Name": "SHRI  PRASAD ONLINE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NANDED",
      "__EMPTY_1": "111958_SHRI  PRASAD ONLINE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111959,
      "Customer Name": "SAGAR XEROX & PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45454,
      "__EMPTY_1": "111959_SAGAR XEROX & PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111960,
      "Customer Name": "Saishri PUC Centre",
      "City": "SAMBAJI NAGAR",
      "__EMPTY_1": "111960_Saishri PUC Centre"
    },
    {
      "Customer Code": 111970,
      "Customer Name": "Dayanand Shrihari Sarje",
      "City": "OSMANABAD",
      "__EMPTY_1": "111970_Dayanand Shrihari Sarje"
    },
    {
      "Customer Code": 111972,
      "Customer Name": "KULKARNI PUC  CENTRE, WAGHOLI\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "111972_KULKARNI PUC  CENTRE, WAGHOLI\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111975,
      "Customer Name": "Mukta PUC Centre",
      "City": "SHRIRAMPUR",
      "Amc End": 45108,
      "__EMPTY_1": "111975_Mukta PUC Centre"
    },
    {
      "Customer Code": 112451,
      "Customer Name": "SHRISANT SAVTAMALI PUC  CENTRE",
      "City": "AHMEDNAGAR",
      "Amc End": 45394,
      "__EMPTY_1": "112451_SHRISANT SAVTAMALI PUC  CENTRE"
    },
    {
      "Customer Code": 112452,
      "Customer Name": "MAULI PUC CENTRE, PUNE",
      "City": "PUNE",
      "__EMPTY_1": "112452_MAULI PUC CENTRE, PUNE"
    },
    {
      "Customer Code": 130032,
      "Customer Name": "SHREEPAD PUC CENTRE",
      "City": "PUNE",
      "__EMPTY_1": "130032_SHREEPAD PUC CENTRE"
    },
    {
      "Customer Code": 130046,
      "Customer Name": "KHANDELWAL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AURANGABAD",
      "Amc End": 45145,
      "__EMPTY_1": "130046_KHANDELWAL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130079,
      "Customer Name": "Mohini Padmakar Kulkarni",
      "City": "PUNE",
      "__EMPTY_1": "130079_Mohini Padmakar Kulkarni"
    },
    {
      "Customer Code": 130084,
      "Customer Name": "BHAGIRATHI ONLINE PUC CENTRE",
      "City": "JALNA",
      "Amc End": 45108,
      "__EMPTY_1": "130084_BHAGIRATHI ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 130110,
      "Customer Name": "TANAYA  ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130110_TANAYA  ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130111,
      "Customer Name": "DAWOOD MEHMOOD KHAN\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45108,
      "__EMPTY_1": "130111_DAWOOD MEHMOOD KHAN\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130112,
      "Customer Name": "Machhindranath PUC Centre",
      "City": "PUNE",
      "__EMPTY_1": "130112_Machhindranath PUC Centre"
    },
    {
      "Customer Code": 130113,
      "Customer Name": "SHREE KRISHNA SRASWATI  PUC",
      "City": "PUNE",
      "__EMPTY_1": "130113_SHREE KRISHNA SRASWATI  PUC"
    },
    {
      "Customer Code": 130125,
      "Customer Name": "BABA PETROLEUM\t\t\t\t\t\t\t\t\t",
      "City": "AHMEDNAGAR",
      "Amc End": 45460,
      "__EMPTY_1": "130125_BABA PETROLEUM\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130126,
      "Customer Name": "YASH PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AHMEDNAGAR",
      "Amc End": 45460,
      "__EMPTY_1": "130126_YASH PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130133,
      "Customer Name": "JAGDAMBA MOTOR DRIVING SCHOOL\t\t\t\t\t\t\t\t\t",
      "City": "JALNA",
      "Amc End": 45245,
      "__EMPTY_1": "130133_JAGDAMBA MOTOR DRIVING SCHOOL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130134,
      "Customer Name": "RAJ  PUC CENTRE",
      "City": "PUNE",
      "Amc End": 45108,
      "__EMPTY_1": "130134_RAJ  PUC CENTRE"
    },
    {
      "Customer Code": 130142,
      "Customer Name": "FARUK  AUTOMOBILES",
      "City": "AHMEDNAGAR",
      "Amc End": 45247,
      "__EMPTY_1": "130142_FARUK  AUTOMOBILES"
    },
    {
      "Customer Code": 130152,
      "Customer Name": "SHREE BRAHMA CHAITANYA PUC CENTRE\t\t\t\t\t\t\t",
      "City": "SATARA",
      "__EMPTY_1": "130152_SHREE BRAHMA CHAITANYA PUC CENTRE\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130155,
      "Customer Name": "CHHAYA PUC CENTRE",
      "City": "PUNE",
      "__EMPTY_1": "130155_CHHAYA PUC CENTRE"
    },
    {
      "Customer Code": 130157,
      "Customer Name": "NEW MAULI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130157_NEW MAULI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130158,
      "Customer Name": "NEW SANIYA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130158_NEW SANIYA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130159,
      "Customer Name": "RUDRA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45293,
      "__EMPTY_1": "130159_RUDRA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130161,
      "Customer Name": "BHARAT AUTOMOBILES AND SPEED GOVERNOR",
      "City": "JALNA",
      "Amc End": 45281,
      "__EMPTY_1": "130161_BHARAT AUTOMOBILES AND SPEED GOVERNOR"
    },
    {
      "Customer Code": 130170,
      "Customer Name": "SHREE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "__EMPTY_1": "130170_SHREE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130175,
      "Customer Name": "SHAFI HUSSAIN JAMADAR",
      "City": "PUNE",
      "Amc End": 45108,
      "__EMPTY_1": "130175_SHAFI HUSSAIN JAMADAR"
    },
    {
      "Customer Code": 130182,
      "Customer Name": "P&P PUC Centre",
      "City": "SATARA",
      "Amc End": 45252,
      "__EMPTY_1": "130182_P&P PUC Centre"
    },
    {
      "Customer Code": 130183,
      "Customer Name": "RATNAKAR VITTHALRAO KULKARNI",
      "City": "PUNE",
      "Amc End": 45299,
      "__EMPTY_1": "130183_RATNAKAR VITTHALRAO KULKARNI"
    },
    {
      "Customer Code": 130185,
      "Customer Name": "KALPATARU PUC CENTRE",
      "City": "AURANGABAD",
      "Amc End": 45274,
      "__EMPTY_1": "130185_KALPATARU PUC CENTRE"
    },
    {
      "Customer Code": 130186,
      "Customer Name": "R J MULTI SERVICES",
      "City": "AURANGABAD",
      "__EMPTY_1": "130186_R J MULTI SERVICES"
    },
    {
      "Customer Code": 130187,
      "Customer Name": "MRS. MOHINI PADMAKAR KULKARNI\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130187_MRS. MOHINI PADMAKAR KULKARNI\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130188,
      "Customer Name": "GURU PUC CENTRE",
      "City": "AHMEDNAGAR",
      "__EMPTY_1": "130188_GURU PUC CENTRE"
    },
    {
      "Customer Code": 130189,
      "Customer Name": "EXCEL SERVICE CENTRE",
      "City": "PUNE",
      "Amc End": 45274,
      "__EMPTY_1": "130189_EXCEL SERVICE CENTRE"
    },
    {
      "Customer Code": 130190,
      "Customer Name": "S R PAWAR PUC CENTRE, SATARA\t\t\t\t\t\t\t\t\t",
      "City": "KARAD",
      "__EMPTY_1": "130190_S R PAWAR PUC CENTRE, SATARA\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130193,
      "Customer Name": "OM PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45325,
      "__EMPTY_1": "130193_OM PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130194,
      "Customer Name": "CHAVAN MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130194_CHAVAN MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130195,
      "Customer Name": "New Kulkarni PUC Centre",
      "City": "PUNE",
      "__EMPTY_1": "130195_New Kulkarni PUC Centre"
    },
    {
      "Customer Code": 130220,
      "Customer Name": "JIJAU REDIAM\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45244,
      "__EMPTY_1": "130220_JIJAU REDIAM\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130227,
      "Customer Name": "ATHARVA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130227_ATHARVA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130228,
      "Customer Name": "SHINDE PETROLEUM\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45244,
      "__EMPTY_1": "130228_SHINDE PETROLEUM\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130235,
      "Customer Name": "MANER  PUC  CENTRE",
      "City": "SATARA",
      "__EMPTY_1": "130235_MANER  PUC  CENTRE"
    },
    {
      "Customer Code": 130237,
      "Customer Name": "SHRI ATHARV ONLINE PUC CENTRE",
      "City": "SATARA",
      "__EMPTY_1": "130237_SHRI ATHARV ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 130238,
      "Customer Name": "SHIRISH SAMPATRAO PATIL\t\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "__EMPTY_1": "130238_SHIRISH SAMPATRAO PATIL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130275,
      "Customer Name": "RADHEKRISHNA PUC  CENTRE",
      "City": "PUNE",
      "__EMPTY_1": "130275_RADHEKRISHNA PUC  CENTRE"
    },
    {
      "Customer Code": 130276,
      "Customer Name": "SAI BABA PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45145,
      "__EMPTY_1": "130276_SAI BABA PUC CENTRE"
    },
    {
      "Customer Code": 130277,
      "Customer Name": "S P ENTERPRISES",
      "City": "AHMEDNAGAR",
      "__EMPTY_1": "130277_S P ENTERPRISES"
    },
    {
      "Customer Code": 130280,
      "Customer Name": "Bhalerao PUC Centre",
      "City": "AHMEDNAGAR",
      "__EMPTY_1": "130280_Bhalerao PUC Centre"
    },
    {
      "Customer Code": 130287,
      "Customer Name": "AKASH  PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130287_AKASH  PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130292,
      "Customer Name": "Shri Gajanan P.U.C Centre",
      "City": "JALNA",
      "Amc End": 45325,
      "__EMPTY_1": "130292_Shri Gajanan P.U.C Centre"
    },
    {
      "Customer Code": 130293,
      "Customer Name": "Arihant PUC Centre",
      "City": "JALNA",
      "Amc End": 45322,
      "__EMPTY_1": "130293_Arihant PUC Centre"
    },
    {
      "Customer Code": 130313,
      "Customer Name": "HANUMANT VYANKETRAON KULKARNI",
      "City": "PUNE",
      "__EMPTY_1": "130313_HANUMANT VYANKETRAON KULKARNI"
    },
    {
      "Customer Code": 130319,
      "Customer Name": "D.R. GAVHANE PUC CENTRE",
      "City": "PUNE",
      "__EMPTY_1": "130319_D.R. GAVHANE PUC CENTRE"
    },
    {
      "Customer Code": 130323,
      "Customer Name": "S.K. TRADERS\t\t\t\t\t\t\t\t\t",
      "City": "AURANGABAD",
      "__EMPTY_1": "130323_S.K. TRADERS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130333,
      "Customer Name": "KASTURI PUC CENTRE",
      "City": "AHMEDNAGAR",
      "__EMPTY_1": "130333_KASTURI PUC CENTRE"
    },
    {
      "Customer Code": 130349,
      "Customer Name": "SHIV PUC CENTRE\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "__EMPTY_1": "130349_SHIV PUC CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130351,
      "Customer Name": "NEW SAMARTH ONLINE PUC CENTRE",
      "City": "OSMANABAD",
      "__EMPTY_1": "130351_NEW SAMARTH ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 130382,
      "Customer Name": "DEVANK PUC CENTRE",
      "City": "BEED",
      "Amc End": 45108,
      "__EMPTY_1": "130382_DEVANK PUC CENTRE"
    },
    {
      "Customer Code": 130422,
      "Customer Name": "PRATHAM BREAKDOWN & MULTI SERVICES\t\t\t\t\t\t",
      "City": "PUNE",
      "__EMPTY_1": "130422_PRATHAM BREAKDOWN & MULTI SERVICES\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130423,
      "Customer Name": "B.U. BHANDARI AUTO PVT. LTD.\t\t\t\t\t\t\t\t\t",
      "City": "PUNE",
      "Amc End": 45356,
      "__EMPTY_1": "130423_B.U. BHANDARI AUTO PVT. LTD.\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130484,
      "Customer Name": "SOHAIL  AUTO\t\t\t\t\t\t\t\t\t",
      "City": "AURANGABAD",
      "__EMPTY_1": "130484_SOHAIL  AUTO\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130508,
      "Customer Name": "ROYAL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "JALNA",
      "Amc End": 45244,
      "__EMPTY_1": "130508_ROYAL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130510,
      "Customer Name": "VIRAJ PUC  CENTRE, SATARA",
      "City": "SATARA",
      "__EMPTY_1": "130510_VIRAJ PUC  CENTRE, SATARA"
    },
    {
      "Customer Code": 130585,
      "Customer Name": "SHREE JAGDAMBA ONLINE PUC CENTRE\t\t\t\t\t\t\t\t",
      "City": "JALNA",
      "__EMPTY_1": "130585_SHREE JAGDAMBA ONLINE PUC CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130587,
      "Customer Name": "SHRI GANESH PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "JALNA",
      "Amc End": 45259,
      "__EMPTY_1": "130587_SHRI GANESH PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130614,
      "Customer Name": "New Anushka PUC Centre",
      "City": "PUNE",
      "__EMPTY_1": "130614_New Anushka PUC Centre"
    },
    {
      "Customer Code": 130657,
      "Customer Name": "VAIBHAV PUC CENTRE",
      "City": "SATARA",
      "Amc End": 45328,
      "__EMPTY_1": "130657_VAIBHAV PUC CENTRE"
    },
    {
      "Customer Code": 130668,
      "Customer Name": "Patel PUC Centre",
      "City": "SATARA",
      "__EMPTY_1": "130668_Patel PUC Centre"
    },
    {
      "Customer Code": 130710,
      "Customer Name": "Jay Hanuman PUC Centre",
      "City": "PUNE",
      "__EMPTY_1": "130710_Jay Hanuman PUC Centre"
    },
    {
      "Customer Code": 130767,
      "Customer Name": "SHRI GAIBINATH MULTI-SERVICES & PUC CENT",
      "City": "AURANGABAD",
      "__EMPTY_1": "130767_SHRI GAIBINATH MULTI-SERVICES & PUC CENT"
    },
    {
      "Customer Code": 130786,
      "Customer Name": "KARAD PUC CENTRE KARAD",
      "City": "KARAD",
      "Amc End": 45149,
      "__EMPTY_1": "130786_KARAD PUC CENTRE KARAD"
    },
    {
      "Customer Code": 130821,
      "Customer Name": "HONDA AUTO SERVICE",
      "City": "PUNE",
      "__EMPTY_1": "130821_HONDA AUTO SERVICE"
    },
    {
      "Customer Code": 130823,
      "Customer Name": "NEW SANGAM PUC CENTRE",
      "City": "SATARA",
      "__EMPTY_1": "130823_NEW SANGAM PUC CENTRE"
    },
    {
      "Customer Code": 130905,
      "Customer Name": "SHREE SAMARTH PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SATARA",
      "__EMPTY_1": "130905_SHREE SAMARTH PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 131054,
      "Customer Name": "HOPE FOUNDATION AND RESEARCH CENTRE",
      "City": "PUNE",
      "__EMPTY_1": "131054_HOPE FOUNDATION AND RESEARCH CENTRE"
    },
    {
      "Customer Code": 131073,
      "Customer Name": "ANSHUL PUC CENTER",
      "City": "SATARA",
      "__EMPTY_1": "131073_ANSHUL PUC CENTER"
    },
    {
      "Customer Code": 131102,
      "Customer Name": "SHIVAM MOTORS",
      "City": "AURANGABAD",
      "__EMPTY_1": "131102_SHIVAM MOTORS"
    },
    {
      "Customer Code": 131119,
      "Customer Name": "SHRI SIDDHANATH PUC CENTER",
      "City": "SATARA",
      "__EMPTY_1": "131119_SHRI SIDDHANATH PUC CENTER"
    },
    {
      "Customer Code": 108092,
      "Customer Name": "Bhosale Motors. Kolhapur",
      "City": "KOLHAPUR",
      "__EMPTY_1": "108092_Bhosale Motors. Kolhapur"
    },
    {
      "Customer Code": 108154,
      "Customer Name": "Dukle Auto Care Centre.Goa",
      "City": "Madgaon",
      "__EMPTY_1": "108154_Dukle Auto Care Centre.Goa"
    },
    {
      "Customer Code": 108293,
      "Customer Name": "Janata Motor Garage.Goa",
      "City": "GOA",
      "__EMPTY_1": "108293_Janata Motor Garage.Goa"
    },
    {
      "Customer Code": 108393,
      "Customer Name": "Mankar Motor Training School",
      "City": "RATNAGIRI",
      "Amc End": 45163,
      "__EMPTY_1": "108393_Mankar Motor Training School"
    },
    {
      "Customer Code": 108437,
      "Customer Name": "Nishkarsh Mobile PUC. Amol",
      "City": "RATNAGIRI",
      "__EMPTY_1": "108437_Nishkarsh Mobile PUC. Amol"
    },
    {
      "Customer Code": 108471,
      "Customer Name": "Sai Auto Pollution Centre",
      "City": "Curchorem,",
      "__EMPTY_1": "108471_Sai Auto Pollution Centre"
    },
    {
      "Customer Code": 108473,
      "Customer Name": "Omkar Motors PUC Centre, Kolha",
      "City": "KOLHAPUR",
      "__EMPTY_1": "108473_Omkar Motors PUC Centre, Kolha"
    },
    {
      "Customer Code": 108476,
      "Customer Name": "Pankaj Motors - Sangli",
      "City": "SANGLI",
      "Amc End": 45243,
      "__EMPTY_1": "108476_Pankaj Motors - Sangli"
    },
    {
      "Customer Code": 108515,
      "Customer Name": "Pankaj Motors - Kolhapur",
      "City": "KOLHAPUR",
      "__EMPTY_1": "108515_Pankaj Motors - Kolhapur"
    },
    {
      "Customer Code": 108531,
      "Customer Name": "Quick Tyre Service, Margoa",
      "City": "Margoa",
      "__EMPTY_1": "108531_Quick Tyre Service, Margoa"
    },
    {
      "Customer Code": 108566,
      "Customer Name": "Rajendra Mane Col.of Engg Tech",
      "City": "RATNAGIRI",
      "__EMPTY_1": "108566_Rajendra Mane Col.of Engg Tech"
    },
    {
      "Customer Code": 108597,
      "Customer Name": "Sai Prasad Poln Testing.R'giri",
      "City": "RATNAGIRI",
      "Amc End": 45169,
      "__EMPTY_1": "108597_Sai Prasad Poln Testing.R'giri"
    },
    {
      "Customer Code": 108698,
      "Customer Name": "Suyog Mobile PUC Testg CntSngl",
      "City": "SANGLI",
      "Amc End": 45156,
      "__EMPTY_1": "108698_Suyog Mobile PUC Testg CntSngl"
    },
    {
      "Customer Code": 108702,
      "Customer Name": "SUYOG PUC CENTRE",
      "City": "RATNAGIRI",
      "Amc End": 45233,
      "__EMPTY_1": "108702_SUYOG PUC CENTRE"
    },
    {
      "Customer Code": 108704,
      "Customer Name": "Sun PUC Centre",
      "City": "KOLHAPUR",
      "__EMPTY_1": "108704_Sun PUC Centre"
    },
    {
      "Customer Code": 108715,
      "Customer Name": "S M Motors, Kolhapur",
      "City": "KOLHAPUR",
      "__EMPTY_1": "108715_S M Motors, Kolhapur"
    },
    {
      "Customer Code": 108721,
      "Customer Name": "Shree Siddheshwar Mobile PTC",
      "City": "MIRAJ",
      "Amc End": 45393,
      "__EMPTY_1": "108721_Shree Siddheshwar Mobile PTC"
    },
    {
      "Customer Code": 108807,
      "Customer Name": "Vardam Mobile PUC Centre.",
      "City": "KANKAWALI",
      "Amc End": 45201,
      "__EMPTY_1": "108807_Vardam Mobile PUC Centre."
    },
    {
      "Customer Code": 108826,
      "Customer Name": "Varadh PUC Centre, Ratnagiri",
      "City": "RATNAGIRI",
      "Amc End": 45153,
      "__EMPTY_1": "108826_Varadh PUC Centre, Ratnagiri"
    },
    {
      "Customer Code": 108858,
      "Customer Name": "Chabukswar Mobile Auto Pollution",
      "City": "MIRAJ",
      "Amc End": 45119,
      "__EMPTY_1": "108858_Chabukswar Mobile Auto Pollution"
    },
    {
      "Customer Code": 109008,
      "Customer Name": "Mahadev Tractor Garag PUC,Sang",
      "City": "SANGLI",
      "__EMPTY_1": "109008_Mahadev Tractor Garag PUC,Sang"
    },
    {
      "Customer Code": 109710,
      "Customer Name": "Bhosle PUC Center,Sangli",
      "City": "SANGLI",
      "__EMPTY_1": "109710_Bhosle PUC Center,Sangli"
    },
    {
      "Customer Code": 109722,
      "Customer Name": "Shree Sai PUC Centre,Kolhapur",
      "City": "KOLHAPUR",
      "__EMPTY_1": "109722_Shree Sai PUC Centre,Kolhapur"
    },
    {
      "Customer Code": 109821,
      "Customer Name": "BAPUJI SALUNKHE INST OF ENGG & TECH",
      "City": "KOLHAPUR",
      "__EMPTY_1": "109821_BAPUJI SALUNKHE INST OF ENGG & TECH"
    },
    {
      "Customer Code": 109832,
      "Customer Name": "Harichandra Pollution Checking Centre",
      "City": "Mapusa",
      "Amc End": 45132,
      "__EMPTY_1": "109832_Harichandra Pollution Checking Centre"
    },
    {
      "Customer Code": 109899,
      "Customer Name": "D G Motors",
      "City": "SANGLI",
      "__EMPTY_1": "109899_D G Motors"
    },
    {
      "Customer Code": 109928,
      "Customer Name": "BHAGIRATHI PUC CENTRE",
      "City": "RATNAGIRI",
      "__EMPTY_1": "109928_BHAGIRATHI PUC CENTRE"
    },
    {
      "Customer Code": 109931,
      "Customer Name": "NATIONAL AUTOMOBILES (MOTORS)",
      "City": "KOLHAPUR",
      "__EMPTY_1": "109931_NATIONAL AUTOMOBILES (MOTORS)"
    },
    {
      "Customer Code": 109940,
      "Customer Name": "Gurukul Pollution Checking Center",
      "City": "Marcela",
      "Amc End": 45168,
      "__EMPTY_1": "109940_Gurukul Pollution Checking Center"
    },
    {
      "Customer Code": 109941,
      "Customer Name": "Alister  Tyre Services",
      "City": "Gogol",
      "Amc End": 45145,
      "__EMPTY_1": "109941_Alister  Tyre Services"
    },
    {
      "Customer Code": 109978,
      "Customer Name": "Utkarsh Teli",
      "City": "Pernem",
      "__EMPTY_1": "109978_Utkarsh Teli"
    },
    {
      "Customer Code": 110004,
      "Customer Name": "JAY YASH PUC CENTRE, TASGAON",
      "City": "SANGLI",
      "__EMPTY_1": "110004_JAY YASH PUC CENTRE, TASGAON"
    },
    {
      "Customer Code": 110018,
      "Customer Name": "PADMABHOOSHAN VASANTRAODADA PATIL INSTIT",
      "City": "MIRAJ",
      "__EMPTY_1": "110018_PADMABHOOSHAN VASANTRAODADA PATIL INSTIT"
    },
    {
      "Customer Code": 110055,
      "Customer Name": "AG ENTERPRISES",
      "City": "PONDA",
      "__EMPTY_1": "110055_AG ENTERPRISES"
    },
    {
      "Customer Code": 110085,
      "Customer Name": "Mr. Shekhar A Naik",
      "City": "Mapusa",
      "Amc End": 45145,
      "__EMPTY_1": "110085_Mr. Shekhar A Naik"
    },
    {
      "Customer Code": 110117,
      "Customer Name": "NATIONAL MOBILE PUC CENTERE",
      "City": "SANGLI",
      "__EMPTY_1": "110117_NATIONAL MOBILE PUC CENTERE"
    },
    {
      "Customer Code": 110164,
      "Customer Name": "NISHKARSH MOBILE PUC CENTRE",
      "City": "RATNAGIRI",
      "__EMPTY_1": "110164_NISHKARSH MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 110172,
      "Customer Name": "OMKAR PUC CENTRE,BHOSALE",
      "City": "MIRAJ",
      "__EMPTY_1": "110172_OMKAR PUC CENTRE,BHOSALE"
    },
    {
      "Customer Code": 110249,
      "Customer Name": "SHREEYA  PUC CENTRE, BHOSALE",
      "City": "KOLHAPUR",
      "Amc End": 45392,
      "__EMPTY_1": "110249_SHREEYA  PUC CENTRE, BHOSALE"
    },
    {
      "Customer Code": 110309,
      "Customer Name": "J D AUTO SERVICE",
      "City": "KOLHAPUR",
      "Amc End": 45155,
      "__EMPTY_1": "110309_J D AUTO SERVICE"
    },
    {
      "Customer Code": 110410,
      "Customer Name": "SOHAM MOTORS,BHOSALE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "110410_SOHAM MOTORS,BHOSALE"
    },
    {
      "Customer Code": 110435,
      "Customer Name": "P.Y. AUTO POLLUTION CENTRE",
      "City": "SANVORDEM",
      "Amc End": 45169,
      "__EMPTY_1": "110435_P.Y. AUTO POLLUTION CENTRE"
    },
    {
      "Customer Code": 110477,
      "Customer Name": "PARAS PUC CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45317,
      "__EMPTY_1": "110477_PARAS PUC CENTRE"
    },
    {
      "Customer Code": 110480,
      "Customer Name": "Mohite Motors Pvt.Ltd.",
      "City": "KOLHAPUR",
      "__EMPTY_1": "110480_Mohite Motors Pvt.Ltd."
    },
    {
      "Customer Code": 110482,
      "Customer Name": "H. K. Motors, BHOSALE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "110482_H. K. Motors, BHOSALE"
    },
    {
      "Customer Code": 110521,
      "Customer Name": "TOTAL TYRE SERVICE",
      "City": "GOA",
      "Amc End": 45165,
      "__EMPTY_1": "110521_TOTAL TYRE SERVICE"
    },
    {
      "Customer Code": 110546,
      "Customer Name": "PANDIT YESHWANT PATIL",
      "City": "KOLHAPUR",
      "__EMPTY_1": "110546_PANDIT YESHWANT PATIL"
    },
    {
      "Customer Code": 111444,
      "Customer Name": "Dosti Pollution Testing Centre",
      "City": "Margoa",
      "__EMPTY_1": "111444_Dosti Pollution Testing Centre"
    },
    {
      "Customer Code": 111449,
      "Customer Name": "TYRE  POINT",
      "City": "GOA",
      "__EMPTY_1": "111449_TYRE  POINT"
    },
    {
      "Customer Code": 111455,
      "Customer Name": "VISHWARAJ CHARI",
      "City": "GOA",
      "__EMPTY_1": "111455_VISHWARAJ CHARI"
    },
    {
      "Customer Code": 111460,
      "Customer Name": "NEW  BHOSLE  MOTORS P.U.C. CENTRE & AUTO",
      "City": "MIRAJ",
      "__EMPTY_1": "111460_NEW  BHOSLE  MOTORS P.U.C. CENTRE & AUTO"
    },
    {
      "Customer Code": 111480,
      "Customer Name": "TYRE TECH",
      "City": "GOA",
      "Amc End": 45146,
      "__EMPTY_1": "111480_TYRE TECH"
    },
    {
      "Customer Code": 111489,
      "Customer Name": "BHOSALE PUC CENTRE(MOBILE) BHOSALE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "111489_BHOSALE PUC CENTRE(MOBILE) BHOSALE"
    },
    {
      "Customer Code": 111497,
      "Customer Name": "Om Motors Puc Centre",
      "City": "KOLHAPUR",
      "Amc End": 45451,
      "__EMPTY_1": "111497_Om Motors Puc Centre"
    },
    {
      "Customer Code": 111506,
      "Customer Name": "National Motor Driving School",
      "City": "SANGLI",
      "Amc End": 45322,
      "__EMPTY_1": "111506_National Motor Driving School"
    },
    {
      "Customer Code": 111520,
      "Customer Name": "Hitech Jadhav Motor's",
      "City": "SANGLI",
      "Amc End": 45348,
      "__EMPTY_1": "111520_Hitech Jadhav Motor's"
    },
    {
      "Customer Code": 111525,
      "Customer Name": "UNIQUE  PUC  CENTRE",
      "City": "SAWANTWADI",
      "Amc End": 45306,
      "__EMPTY_1": "111525_UNIQUE  PUC  CENTRE"
    },
    {
      "Customer Code": 111557,
      "Customer Name": "MR. JAGDISH M. TIRODKAR",
      "City": "GOA",
      "__EMPTY_1": "111557_MR. JAGDISH M. TIRODKAR"
    },
    {
      "Customer Code": 111568,
      "Customer Name": "PANKAJ  MOTORS",
      "City": "SANGLI",
      "Amc End": 45243,
      "__EMPTY_1": "111568_PANKAJ  MOTORS"
    },
    {
      "Customer Code": 111577,
      "Customer Name": "S.S. MOTORS, BHOSALE",
      "City": "KOLHAPUR",
      "Amc End": 45392,
      "__EMPTY_1": "111577_S.S. MOTORS, BHOSALE"
    },
    {
      "Customer Code": 111590,
      "Customer Name": "VETHOBA PUC CENTRE",
      "City": "OROS",
      "Amc End": 45206,
      "__EMPTY_1": "111590_VETHOBA PUC CENTRE"
    },
    {
      "Customer Code": 111600,
      "Customer Name": "SHANTI PUC CENTRE\t\t",
      "City": "SANGLI",
      "__EMPTY_1": "111600_SHANTI PUC CENTRE\t\t"
    },
    {
      "Customer Code": 111603,
      "Customer Name": "OM DATTA POLLUTION TESTING  CENTRE",
      "City": "CUNCOLIM",
      "__EMPTY_1": "111603_OM DATTA POLLUTION TESTING  CENTRE"
    },
    {
      "Customer Code": 111649,
      "Customer Name": "SAI PUC CENTRE , DODAMARG",
      "City": "DODAMARG",
      "__EMPTY_1": "111649_SAI PUC CENTRE , DODAMARG"
    },
    {
      "Customer Code": 111657,
      "Customer Name": "AVISH ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "OLD GOA",
      "__EMPTY_1": "111657_AVISH ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111702,
      "Customer Name": "VISHAL V. PRABHU",
      "City": "BETHORA",
      "Amc End": 45250,
      "__EMPTY_1": "111702_VISHAL V. PRABHU"
    },
    {
      "Customer Code": 111715,
      "Customer Name": "GANPAT  H. KURTIKER\t, PONDA\t\t\t\t\t\t\t\t",
      "City": "PONDA",
      "Amc End": 45293,
      "__EMPTY_1": "111715_GANPAT  H. KURTIKER\t, PONDA\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111717,
      "Customer Name": "GANPAT  H. KURTIKER\t, SHIRDI",
      "City": "GOA",
      "__EMPTY_1": "111717_GANPAT  H. KURTIKER\t, SHIRDI"
    },
    {
      "Customer Code": 111726,
      "Customer Name": "STAR PETRO LINKS\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45461,
      "__EMPTY_1": "111726_STAR PETRO LINKS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111727,
      "Customer Name": "GHODAWAT  PETRO LINKS\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45108,
      "__EMPTY_1": "111727_GHODAWAT  PETRO LINKS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111781,
      "Customer Name": "K.B.MOTORS\t\t\t\t\t\t\t\t\t",
      "City": "SANGLI",
      "Amc End": 45453,
      "__EMPTY_1": "111781_K.B.MOTORS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111788,
      "Customer Name": "MAYUR  MOTORS\t\t\t\t\t\t\t\t\t",
      "City": "RATNAGIRI",
      "__EMPTY_1": "111788_MAYUR  MOTORS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111802,
      "Customer Name": "RUDRA MOBILE PUC CENTRE, BHOSALE\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45392,
      "__EMPTY_1": "111802_RUDRA MOBILE PUC CENTRE, BHOSALE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111807,
      "Customer Name": "SHREE SAMARTH ENGINEERS\t\t\t\t\t\t\t\t\t",
      "City": "RATNAGIRI",
      "__EMPTY_1": "111807_SHREE SAMARTH ENGINEERS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111808,
      "Customer Name": "SANKET PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "GOA",
      "Amc End": 45460,
      "__EMPTY_1": "111808_SANKET PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111863,
      "Customer Name": "ADIMAYA  ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "__EMPTY_1": "111863_ADIMAYA  ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111866,
      "Customer Name": "RUCHIKA POLLUTION TESTING CENTRE\t\t\t\t\t\t\t\t",
      "City": "PONDA",
      "__EMPTY_1": "111866_RUCHIKA POLLUTION TESTING CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111890,
      "Customer Name": "PARESH SINGBAL\t\t\t\t\t\t\t\t\t",
      "City": "VASCO DA GAMA",
      "Amc End": 45259,
      "__EMPTY_1": "111890_PARESH SINGBAL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111935,
      "Customer Name": "GAURESH ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "SANCAOLE",
      "Amc End": 45120,
      "__EMPTY_1": "111935_GAURESH ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111937,
      "Customer Name": "KAMAKSHI  AUTO POLLUTION CHECKING CENTRE",
      "City": "SAWARDEM",
      "__EMPTY_1": "111937_KAMAKSHI  AUTO POLLUTION CHECKING CENTRE"
    },
    {
      "Customer Code": 111974,
      "Customer Name": "JANATA MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45285,
      "__EMPTY_1": "111974_JANATA MOBILE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111979,
      "Customer Name": "SUN PUC CENTRE, BHOSALE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "__EMPTY_1": "111979_SUN PUC CENTRE, BHOSALE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111991,
      "Customer Name": "SHRI SAMARTH  PUC  CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45108,
      "__EMPTY_1": "111991_SHRI SAMARTH  PUC  CENTRE"
    },
    {
      "Customer Code": 111999,
      "Customer Name": "VIKRAM V. NAIK\t\t\t\t\t\t\t\t\t",
      "City": "WADDO",
      "__EMPTY_1": "111999_VIKRAM V. NAIK\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 112438,
      "Customer Name": "ADARSH PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "112438_ADARSH PUC CENTRE"
    },
    {
      "Customer Code": 112442,
      "Customer Name": "SHRI SADHGURU BALUMAMA PUC CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45210,
      "__EMPTY_1": "112442_SHRI SADHGURU BALUMAMA PUC CENTRE"
    },
    {
      "Customer Code": 112444,
      "Customer Name": "ANANYA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45108,
      "__EMPTY_1": "112444_ANANYA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 112446,
      "Customer Name": "ADARSH PUC  CENTRE, SRWADA",
      "City": "KOLHAPUR",
      "__EMPTY_1": "112446_ADARSH PUC  CENTRE, SRWADA"
    },
    {
      "Customer Code": 112448,
      "Customer Name": "SHREE BALAJI PUC CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45219,
      "__EMPTY_1": "112448_SHREE BALAJI PUC CENTRE"
    },
    {
      "Customer Code": 112449,
      "Customer Name": "SHRADDHA PUC CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45218,
      "__EMPTY_1": "112449_SHRADDHA PUC CENTRE"
    },
    {
      "Customer Code": 112453,
      "Customer Name": "ATUL PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "112453_ATUL PUC CENTRE"
    },
    {
      "Customer Code": 130009,
      "Customer Name": "Rane PUC Centre",
      "City": "KUDAL",
      "Amc End": 45377,
      "__EMPTY_1": "130009_Rane PUC Centre"
    },
    {
      "Customer Code": 130053,
      "Customer Name": "GURUDUTTA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45153,
      "__EMPTY_1": "130053_GURUDUTTA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130074,
      "Customer Name": "OM PUC",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130074_OM PUC"
    },
    {
      "Customer Code": 130107,
      "Customer Name": "OM SAI PUC CENTRE\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45204,
      "__EMPTY_1": "130107_OM SAI PUC CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130108,
      "Customer Name": "SUDESH M. MAVLANKAR\t\t\t\t\t\t\t\t\t",
      "City": "MAROD",
      "Amc End": 45138,
      "__EMPTY_1": "130108_SUDESH M. MAVLANKAR\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130121,
      "Customer Name": "NEW CHABUKSWAR  PUC",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130121_NEW CHABUKSWAR  PUC"
    },
    {
      "Customer Code": 130123,
      "Customer Name": "APANA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45244,
      "__EMPTY_1": "130123_APANA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130124,
      "Customer Name": "SUSHILA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45335,
      "__EMPTY_1": "130124_SUSHILA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130136,
      "Customer Name": "AUTO GALLERY",
      "__EMPTY_1": "130136_AUTO GALLERY"
    },
    {
      "Customer Code": 130139,
      "Customer Name": "MR. MAYUR RAJARAM KOLI",
      "City": "KOLHAPUR",
      "Amc End": 45399,
      "__EMPTY_1": "130139_MR. MAYUR RAJARAM KOLI"
    },
    {
      "Customer Code": 130143,
      "Customer Name": "ADARSH PUC  CENTRE",
      "City": "MIRAJ",
      "__EMPTY_1": "130143_ADARSH PUC  CENTRE"
    },
    {
      "Customer Code": 130147,
      "Customer Name": "POPULAR PUC CENTER\t\t\t\t\t\t\t\t\t",
      "City": "ICHALKARANJI",
      "__EMPTY_1": "130147_POPULAR PUC CENTER\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130148,
      "Customer Name": "SAHAKAR PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SANGLI",
      "__EMPTY_1": "130148_SAHAKAR PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130150,
      "Customer Name": "KEDAR PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "ICHALKARANJI",
      "__EMPTY_1": "130150_KEDAR PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130151,
      "Customer Name": "NEW SHRADHA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45335,
      "__EMPTY_1": "130151_NEW SHRADHA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130165,
      "Customer Name": "SAVERA PUC CENTRE",
      "City": "SANGLI",
      "__EMPTY_1": "130165_SAVERA PUC CENTRE"
    },
    {
      "Customer Code": 130166,
      "Customer Name": "A K PUC Centre",
      "City": "Phonda",
      "__EMPTY_1": "130166_A K PUC Centre"
    },
    {
      "Customer Code": 130169,
      "Customer Name": "Xtra Miles Tyres Service",
      "Amc End": 45108,
      "__EMPTY_1": "130169_Xtra Miles Tyres Service"
    },
    {
      "Customer Code": 130173,
      "Customer Name": "NEW SHREYA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45250,
      "__EMPTY_1": "130173_NEW SHREYA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130176,
      "Customer Name": "INAYA  PUC CENTRE",
      "City": "SANGLI",
      "Amc End": 45290,
      "__EMPTY_1": "130176_INAYA  PUC CENTRE"
    },
    {
      "Customer Code": 130178,
      "Customer Name": "VETHOBA PUC  CENTRE, OROS\t\t\t\t\t\t\t\t\t",
      "City": "KUDAL",
      "__EMPTY_1": "130178_VETHOBA PUC  CENTRE, OROS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130181,
      "Customer Name": "BHARAT PUC CENTRE, SANGLI",
      "City": "SANGLI",
      "__EMPTY_1": "130181_BHARAT PUC CENTRE, SANGLI"
    },
    {
      "Customer Code": 130191,
      "Customer Name": "S R PAWAR PUC CENTRE, SANGLI",
      "City": "SANGLI",
      "__EMPTY_1": "130191_S R PAWAR PUC CENTRE, SANGLI"
    },
    {
      "Customer Code": 130203,
      "Customer Name": "SAHAKAR PUC CENTRE",
      "City": "SANGLI",
      "__EMPTY_1": "130203_SAHAKAR PUC CENTRE"
    },
    {
      "Customer Code": 130219,
      "Customer Name": "SHIVKRUPA FABRICATION & SERVICING CENTRE",
      "__EMPTY_1": "130219_SHIVKRUPA FABRICATION & SERVICING CENTRE"
    },
    {
      "Customer Code": 130223,
      "Customer Name": "BALAJI AUTO CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45274,
      "__EMPTY_1": "130223_BALAJI AUTO CENTRE"
    },
    {
      "Customer Code": 130234,
      "Customer Name": "S S SERVICES\t\t\t\t\t\t\t\t\t",
      "City": "SAWANTWADI",
      "Amc End": 45262,
      "__EMPTY_1": "130234_S S SERVICES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130249,
      "Customer Name": "FATTESINH LALASAHEB PATIL\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45260,
      "__EMPTY_1": "130249_FATTESINH LALASAHEB PATIL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130253,
      "Customer Name": "PUSHKAR PUC CENTRE",
      "City": "RATNAGIRI",
      "Amc End": 45268,
      "__EMPTY_1": "130253_PUSHKAR PUC CENTRE"
    },
    {
      "Customer Code": 130261,
      "Customer Name": "H.M. PUC CENTRE",
      "City": "KOLHAPUR",
      "Amc End": 45259,
      "__EMPTY_1": "130261_H.M. PUC CENTRE"
    },
    {
      "Customer Code": 130264,
      "Customer Name": "BORGAVE  AUTOMOBILES\t\t\t\t\t\t\t\t\t",
      "City": "ICHALKARANJI",
      "__EMPTY_1": "130264_BORGAVE  AUTOMOBILES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130269,
      "Customer Name": "SHRI OM MOTOR TRAINING SCHOOL",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130269_SHRI OM MOTOR TRAINING SCHOOL"
    },
    {
      "Customer Code": 130283,
      "Customer Name": "PATIL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45271,
      "__EMPTY_1": "130283_PATIL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130290,
      "Customer Name": "Shree Ganesh PUC Centre Sangali",
      "City": "SANGLI",
      "Amc End": 45135,
      "__EMPTY_1": "130290_Shree Ganesh PUC Centre Sangali"
    },
    {
      "Customer Code": 130294,
      "Customer Name": "ADISHAKTI ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45108,
      "__EMPTY_1": "130294_ADISHAKTI ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130296,
      "Customer Name": "HOGADE PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45280,
      "__EMPTY_1": "130296_HOGADE PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130298,
      "Customer Name": "SHREEYA MOTORS",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130298_SHREEYA MOTORS"
    },
    {
      "Customer Code": 130299,
      "Customer Name": "New Moraya Online Services",
      "City": "KOLHAPUR",
      "Amc End": 45294,
      "__EMPTY_1": "130299_New Moraya Online Services"
    },
    {
      "Customer Code": 130316,
      "Customer Name": "SUYOG  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "MIRAJ",
      "Amc End": 45156,
      "__EMPTY_1": "130316_SUYOG  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130318,
      "Customer Name": "BURSHE'S AUTO SERVICES\t\t\t\t\t\t\t\t\t",
      "City": "RATNAGIRI",
      "__EMPTY_1": "130318_BURSHE'S AUTO SERVICES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130352,
      "Customer Name": "APANA MOTOR PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130352_APANA MOTOR PUC CENTRE"
    },
    {
      "Customer Code": 130355,
      "Customer Name": "Vedant Motors",
      "City": "KOLHAPUR",
      "Amc End": 45307,
      "__EMPTY_1": "130355_Vedant Motors"
    },
    {
      "Customer Code": 130357,
      "Customer Name": "Narmada Motors",
      "City": "KOLHAPUR",
      "Amc End": 45322,
      "__EMPTY_1": "130357_Narmada Motors"
    },
    {
      "Customer Code": 130387,
      "Customer Name": "SHRIRAM WHEEL ALIGMENT & PUC CENTRE\t\t\t\t",
      "City": "SANGLI",
      "__EMPTY_1": "130387_SHRIRAM WHEEL ALIGMENT & PUC CENTRE\t\t\t\t"
    },
    {
      "Customer Code": 130389,
      "Customer Name": "VIJAYMALA PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130389_VIJAYMALA PUC CENTRE"
    },
    {
      "Customer Code": 130397,
      "Customer Name": "KOLHAPUR PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130397_KOLHAPUR PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130398,
      "Customer Name": "A.M. PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130398_A.M. PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130412,
      "Customer Name": "MAOOLI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "RATNAGIRI",
      "Amc End": 45155,
      "__EMPTY_1": "130412_MAOOLI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130415,
      "Customer Name": "SAHAKARI  PETROLEUM\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130415_SAHAKARI  PETROLEUM\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130420,
      "Customer Name": "SRI GANESHA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130420_SRI GANESHA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130424,
      "Customer Name": "POLLUTION TESTING  CENTRE\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130424_POLLUTION TESTING  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130425,
      "Customer Name": "VARDAM PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KANKAWALI",
      "__EMPTY_1": "130425_VARDAM PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130428,
      "Customer Name": "SAISH ASHOK SAWANT\t\t\t\t\t\t\t\t\t",
      "City": "SAWANTWADI",
      "__EMPTY_1": "130428_SAISH ASHOK SAWANT\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130437,
      "Customer Name": "Yashwanti PUC Centre",
      "City": "RATNAGIRI",
      "Amc End": 45153,
      "__EMPTY_1": "130437_Yashwanti PUC Centre"
    },
    {
      "Customer Code": 130445,
      "Customer Name": "ASHOK   B. PATIL",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130445_ASHOK   B. PATIL"
    },
    {
      "Customer Code": 130459,
      "Customer Name": "New Adarsh PUC Centre",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130459_New Adarsh PUC Centre"
    },
    {
      "Customer Code": 130463,
      "Customer Name": "GANPAT  H. KURTIKER\t, GOA\t\t\t\t\t\t\t",
      "City": "PONDA",
      "Amc End": 45293,
      "__EMPTY_1": "130463_GANPAT  H. KURTIKER\t, GOA\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130523,
      "Customer Name": "Savaikar Autopoint",
      "__EMPTY_1": "130523_Savaikar Autopoint"
    },
    {
      "Customer Code": 130565,
      "Customer Name": "SHRI SAMARTH KRUPA PUC CENTRE",
      "City": "RAJAPUR",
      "Amc End": 45219,
      "__EMPTY_1": "130565_SHRI SAMARTH KRUPA PUC CENTRE"
    },
    {
      "Customer Code": 130568,
      "Customer Name": "DHANRAJ SERVICE CENTRE",
      "__EMPTY_1": "130568_DHANRAJ SERVICE CENTRE"
    },
    {
      "Customer Code": 130580,
      "Customer Name": "Ganshakti PUC Centre",
      "City": "SINDHUDURG",
      "Amc End": 45226,
      "__EMPTY_1": "130580_Ganshakti PUC Centre"
    },
    {
      "Customer Code": 130646,
      "Customer Name": "K MOTORS, BHOSALE\t\t\t\t\t\t\t\t\t",
      "City": "KOLHAPUR",
      "Amc End": 45161,
      "__EMPTY_1": "130646_K MOTORS, BHOSALE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130690,
      "Customer Name": "VARDAM PUC CENTRE",
      "City": "KANKAWALI",
      "Amc End": 45357,
      "__EMPTY_1": "130690_VARDAM PUC CENTRE"
    },
    {
      "Customer Code": 130714,
      "Customer Name": "SHRI SWAMISAMARTH ONLINE PUC CENTRE\t\t\t\t\t",
      "City": "RATNAGIRI",
      "__EMPTY_1": "130714_SHRI SWAMISAMARTH ONLINE PUC CENTRE\t\t\t\t\t"
    },
    {
      "Customer Code": 130752,
      "Customer Name": "NEW PARAS PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130752_NEW PARAS PUC CENTRE"
    },
    {
      "Customer Code": 130792,
      "Customer Name": "SANJYOTI NAIK",
      "__EMPTY_1": "130792_SANJYOTI NAIK"
    },
    {
      "Customer Code": 130810,
      "Customer Name": "SAMIR AUTO PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SANGLI",
      "__EMPTY_1": "130810_SAMIR AUTO PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130833,
      "Customer Name": "R S Autotech",
      "Amc End": 45245,
      "__EMPTY_1": "130833_R S Autotech"
    },
    {
      "Customer Code": 130838,
      "Customer Name": "SHRI GANESHA PUC CENTRE, KOLHAP",
      "City": "KOLHAPUR",
      "__EMPTY_1": "130838_SHRI GANESHA PUC CENTRE, KOLHAP"
    },
    {
      "Customer Code": 130847,
      "Customer Name": "Rane PUC Centre",
      "City": "SINDHUDURG",
      "__EMPTY_1": "130847_Rane PUC Centre"
    },
    {
      "Customer Code": 130865,
      "Customer Name": "ABHIJITA AND SANKET ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130865_ABHIJITA AND SANKET ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130866,
      "Customer Name": "GM PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "__EMPTY_1": "130866_GM PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130888,
      "Customer Name": "JEEVAN PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "SANGLI",
      "__EMPTY_1": "130888_JEEVAN PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130910,
      "Customer Name": "Borker Trade Link",
      "__EMPTY_1": "130910_Borker Trade Link"
    },
    {
      "Customer Code": 130942,
      "Customer Name": "VAHAN PUC CENTRE, AVISH NAIK",
      "__EMPTY_1": "130942_VAHAN PUC CENTRE, AVISH NAIK"
    },
    {
      "Customer Code": 130962,
      "Customer Name": "SANDIP NARAYAN VANMORE",
      "City": "KOLHAPUR",
      "Amc End": 45392,
      "__EMPTY_1": "130962_SANDIP NARAYAN VANMORE"
    },
    {
      "Customer Code": 131004,
      "Customer Name": "ATHARV PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131004_ATHARV PUC CENTRE"
    },
    {
      "Customer Code": 131008,
      "Customer Name": "ATHARAV PUC CENTER",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131008_ATHARAV PUC CENTER"
    },
    {
      "Customer Code": 131016,
      "Customer Name": "SANSWARA SERVICES",
      "City": "GOA",
      "__EMPTY_1": "131016_SANSWARA SERVICES"
    },
    {
      "Customer Code": 131070,
      "Customer Name": "shree satam maharaj puc centre",
      "City": "SAWANTWADI",
      "__EMPTY_1": "131070_shree satam maharaj puc centre"
    },
    {
      "Customer Code": 131072,
      "Customer Name": "AABASAHEB ONLINE PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131072_AABASAHEB ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 131075,
      "Customer Name": "AMOL DATTATRAY VILANKAR",
      "City": "RATNAGIRI",
      "__EMPTY_1": "131075_AMOL DATTATRAY VILANKAR"
    },
    {
      "Customer Code": 131090,
      "Customer Name": "KUMAR GOVIND BHOSLE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131090_KUMAR GOVIND BHOSLE"
    },
    {
      "Customer Code": 131105,
      "Customer Name": "Gautam Upadhye,",
      "City": "GOA",
      "__EMPTY_1": "131105_Gautam Upadhye,"
    },
    {
      "Customer Code": 131112,
      "Customer Name": "SHIVRAJ ONLINE PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131112_SHIVRAJ ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 131122,
      "Customer Name": "JIYANSH PUC CENTRE",
      "City": "GOA",
      "__EMPTY_1": "131122_JIYANSH PUC CENTRE"
    },
    {
      "Customer Code": 131129,
      "Customer Name": "SHRI ATHARV PUC CENTRE",
      "City": "SANGLI",
      "__EMPTY_1": "131129_SHRI ATHARV PUC CENTRE"
    },
    {
      "Customer Code": 131138,
      "Customer Name": "LAXMI PUC CENTRE",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131138_LAXMI PUC CENTRE"
    },
    {
      "Customer Code": 131158,
      "Customer Name": "SMS PUC CENTRE",
      "City": "GOA",
      "__EMPTY_1": "131158_SMS PUC CENTRE"
    },
    {
      "Customer Code": 131159,
      "Customer Name": "AVADHOOT PUC CENTRE,",
      "City": "KOLHAPUR",
      "__EMPTY_1": "131159_AVADHOOT PUC CENTRE,"
    },
    {
      "Customer Code": 108016,
      "Customer Name": "Airoli Service Centre.",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "108016_Airoli Service Centre."
    },
    {
      "Customer Code": 108022,
      "Customer Name": "Allied Auto Service. Bhiwandi",
      "City": "BHIWANDI",
      "Amc End": 45244,
      "__EMPTY_1": "108022_Allied Auto Service. Bhiwandi"
    },
    {
      "Customer Code": 108023,
      "Customer Name": "Auto Fleet, Bhiwandi",
      "City": "BHIWANDI",
      "Amc End": 45152,
      "__EMPTY_1": "108023_Auto Fleet, Bhiwandi"
    },
    {
      "Customer Code": 108030,
      "Customer Name": "Anjur Service Station.",
      "City": "BHIWANDI",
      "__EMPTY_1": "108030_Anjur Service Station."
    },
    {
      "Customer Code": 108074,
      "Customer Name": "Belapur Automobiles. N-Bombay",
      "City": "NAVI MUMBAI",
      "Amc End": 45233,
      "__EMPTY_1": "108074_Belapur Automobiles. N-Bombay"
    },
    {
      "Customer Code": 108078,
      "Customer Name": "Bandu Mobile PUC Centre",
      "City": "NAVI MUMBAI",
      "Amc End": 45271,
      "__EMPTY_1": "108078_Bandu Mobile PUC Centre"
    },
    {
      "Customer Code": 108086,
      "Customer Name": "Balaji Mobile PUC Centre Thane",
      "City": "NAVI MUMBAI",
      "Amc End": 45271,
      "__EMPTY_1": "108086_Balaji Mobile PUC Centre Thane"
    },
    {
      "Customer Code": 108097,
      "Customer Name": "Bharati Vidyapeeth's Coll Engg",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "108097_Bharati Vidyapeeth's Coll Engg"
    },
    {
      "Customer Code": 108103,
      "Customer Name": "Balaji Automobiles",
      "City": "RAIGAD",
      "__EMPTY_1": "108103_Balaji Automobiles"
    },
    {
      "Customer Code": 108158,
      "Customer Name": "Dhamal Enterprises. Vashi",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "108158_Dhamal Enterprises. Vashi"
    },
    {
      "Customer Code": 108324,
      "Customer Name": "K K Wagh Education Society, Nashik",
      "City": "NASHIK",
      "__EMPTY_1": "108324_K K Wagh Education Society, Nashik"
    },
    {
      "Customer Code": 108358,
      "Customer Name": "Mr.Madhukar.S.Chaudhari",
      "City": "BHUSAVAL",
      "Amc End": 45303,
      "__EMPTY_1": "108358_Mr.Madhukar.S.Chaudhari"
    },
    {
      "Customer Code": 108360,
      "Customer Name": "Modern Port Automobiles",
      "City": "URAN",
      "__EMPTY_1": "108360_Modern Port Automobiles"
    },
    {
      "Customer Code": 108373,
      "Customer Name": "MAULI ENTERPRISES,",
      "City": "BHIWANDI",
      "__EMPTY_1": "108373_MAULI ENTERPRISES,"
    },
    {
      "Customer Code": 108434,
      "Customer Name": "National Weigh Bridge & Auto S",
      "City": "PANVEL",
      "__EMPTY_1": "108434_National Weigh Bridge & Auto S"
    },
    {
      "Customer Code": 108496,
      "Customer Name": "Pratik Mobile PUC Centre.",
      "City": "DOMBIVALI",
      "__EMPTY_1": "108496_Pratik Mobile PUC Centre."
    },
    {
      "Customer Code": 108626,
      "Customer Name": "Shri Sai Auto Services. Nerul",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "108626_Shri Sai Auto Services. Nerul"
    },
    {
      "Customer Code": 108657,
      "Customer Name": "Sai Girnar PUC Centre. Vashi",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "108657_Sai Girnar PUC Centre. Vashi"
    },
    {
      "Customer Code": 108666,
      "Customer Name": "Sunanda Mobile PUC Cent.D'vli",
      "City": "DOMBIVALI",
      "Amc End": 45275,
      "__EMPTY_1": "108666_Sunanda Mobile PUC Cent.D'vli"
    },
    {
      "Customer Code": 108667,
      "Customer Name": "SAI VAIBHAV P.U.C. CENTRE,",
      "City": "NAVI MUMBAI",
      "Amc End": 45334,
      "__EMPTY_1": "108667_SAI VAIBHAV P.U.C. CENTRE,"
    },
    {
      "Customer Code": 108734,
      "Customer Name": "SAI P.U.C. CENTRE,",
      "City": "PEN",
      "Amc End": 45361,
      "__EMPTY_1": "108734_SAI P.U.C. CENTRE,"
    },
    {
      "Customer Code": 108778,
      "Customer Name": "USMA AUTOMOBILES",
      "City": "DOMBIVALI",
      "Amc End": 45327,
      "__EMPTY_1": "108778_USMA AUTOMOBILES"
    },
    {
      "Customer Code": 108798,
      "Customer Name": "VIRANI AUTOMOBILES",
      "City": "THANE",
      "Amc End": 45110,
      "__EMPTY_1": "108798_VIRANI AUTOMOBILES"
    },
    {
      "Customer Code": 108799,
      "Customer Name": "Vijay Automobiles. Kalamboli",
      "City": "NAVI MUMBAI",
      "Amc End": 45169,
      "__EMPTY_1": "108799_Vijay Automobiles. Kalamboli"
    },
    {
      "Customer Code": 108803,
      "Customer Name": "Vashi Petroleum",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "108803_Vashi Petroleum"
    },
    {
      "Customer Code": 109020,
      "Customer Name": "Ganesh PUC Centre",
      "City": "DOMBIVALI",
      "__EMPTY_1": "109020_Ganesh PUC Centre"
    },
    {
      "Customer Code": 109038,
      "Customer Name": "DILIP PUC CENTRE",
      "City": "DOMBIVALI",
      "__EMPTY_1": "109038_DILIP PUC CENTRE"
    },
    {
      "Customer Code": 109077,
      "Customer Name": "OM KAMAL AUTO STORES,",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109077_OM KAMAL AUTO STORES,"
    },
    {
      "Customer Code": 109241,
      "Customer Name": "SHREE BALAJI PUC CENTRE,",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109241_SHREE BALAJI PUC CENTRE,"
    },
    {
      "Customer Code": 109347,
      "Customer Name": "SHREEJI ENTERPRISES",
      "City": "BHIWANDI",
      "__EMPTY_1": "109347_SHREEJI ENTERPRISES"
    },
    {
      "Customer Code": 109377,
      "Customer Name": "SAI RAJ PUC CENTRE,",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109377_SAI RAJ PUC CENTRE,"
    },
    {
      "Customer Code": 109448,
      "Customer Name": "GURUKRIPA AUTO SERVICE CENTRE,",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109448_GURUKRIPA AUTO SERVICE CENTRE,"
    },
    {
      "Customer Code": 109449,
      "Customer Name": "NGB AUTO SERVICE,",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109449_NGB AUTO SERVICE,"
    },
    {
      "Customer Code": 109519,
      "Customer Name": "JAI SAI ENTERPRISES",
      "City": "NAVI MUMBAI",
      "Amc End": 45387,
      "__EMPTY_1": "109519_JAI SAI ENTERPRISES"
    },
    {
      "Customer Code": 109644,
      "Customer Name": "Laxmi Mobile PUC Center,Dombivali",
      "City": "DOMBIVALI",
      "Amc End": 45135,
      "__EMPTY_1": "109644_Laxmi Mobile PUC Center,Dombivali"
    },
    {
      "Customer Code": 109653,
      "Customer Name": "SHREE SAMARTH PUC CENTRE AMBERNATH",
      "City": "AMBERNATH",
      "__EMPTY_1": "109653_SHREE SAMARTH PUC CENTRE AMBERNATH"
    },
    {
      "Customer Code": 109689,
      "Customer Name": "Razak Khan",
      "City": "JALGAON",
      "Amc End": 45286,
      "__EMPTY_1": "109689_Razak Khan"
    },
    {
      "Customer Code": 109699,
      "Customer Name": "Om Vaishnavi PUC Centre",
      "City": "NAVI MUMBAI",
      "Amc End": 45304,
      "__EMPTY_1": "109699_Om Vaishnavi PUC Centre"
    },
    {
      "Customer Code": 109727,
      "Customer Name": "Clean Air PUC Center,Ambernath",
      "City": "AMBERNATH",
      "__EMPTY_1": "109727_Clean Air PUC Center,Ambernath"
    },
    {
      "Customer Code": 109740,
      "Customer Name": "Benz Auto Emission, Ambernath",
      "City": "AMBERNATH",
      "__EMPTY_1": "109740_Benz Auto Emission, Ambernath"
    },
    {
      "Customer Code": 109764,
      "Customer Name": "Jai Ganesh PUC Centre, N Tupe",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109764_Jai Ganesh PUC Centre, N Tupe"
    },
    {
      "Customer Code": 109770,
      "Customer Name": "Hardev PUC Center",
      "City": "NASHIK",
      "Amc End": 45328,
      "__EMPTY_1": "109770_Hardev PUC Center"
    },
    {
      "Customer Code": 109785,
      "Customer Name": "Sai Balaji PUC Centre,Belapur",
      "City": "BELAPUR",
      "Amc End": 45271,
      "__EMPTY_1": "109785_Sai Balaji PUC Centre,Belapur"
    },
    {
      "Customer Code": 109813,
      "Customer Name": "Rajnesh PUC Centre,Bhiwandi",
      "City": "BHIWANDI",
      "Amc End": 45120,
      "__EMPTY_1": "109813_Rajnesh PUC Centre,Bhiwandi"
    },
    {
      "Customer Code": 109822,
      "Customer Name": "Universal Automobiles - Prasanna",
      "City": "NAVI MUMBAI",
      "Amc End": 45331,
      "__EMPTY_1": "109822_Universal Automobiles - Prasanna"
    },
    {
      "Customer Code": 109844,
      "Customer Name": "SHREE AYYAPPA  AUTO CONSULTANT",
      "City": "AMBERNATH",
      "__EMPTY_1": "109844_SHREE AYYAPPA  AUTO CONSULTANT"
    },
    {
      "Customer Code": 109848,
      "Customer Name": "JAI GANESH PUC CENTRE-Palape",
      "City": "PANVEL",
      "Amc End": 45395,
      "__EMPTY_1": "109848_JAI GANESH PUC CENTRE-Palape"
    },
    {
      "Customer Code": 109866,
      "Customer Name": "PRATHAM PUC CENTRE",
      "City": "BHIWANDI",
      "Amc End": 45276,
      "__EMPTY_1": "109866_PRATHAM PUC CENTRE"
    },
    {
      "Customer Code": 109869,
      "Customer Name": "MANGAON PETROLEUM",
      "City": "MANGAON",
      "Amc End": 45462,
      "__EMPTY_1": "109869_MANGAON PETROLEUM"
    },
    {
      "Customer Code": 109965,
      "Customer Name": "K.M.Suchak & Co.",
      "City": "NAVI MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "109965_K.M.Suchak & Co."
    },
    {
      "Customer Code": 109991,
      "Customer Name": "SAI KRUPA PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "109991_SAI KRUPA PUC CENTRE"
    },
    {
      "Customer Code": 109997,
      "Customer Name": "DIVINE MOBILE PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45279,
      "__EMPTY_1": "109997_DIVINE MOBILE PUC CENTRE"
    },
    {
      "Customer Code": 110005,
      "Customer Name": "JYOTIRLING PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110005_JYOTIRLING PUC CENTRE"
    },
    {
      "Customer Code": 110025,
      "Customer Name": "RAJ  AUTO MAHAD",
      "City": "MAHAD",
      "__EMPTY_1": "110025_RAJ  AUTO MAHAD"
    },
    {
      "Customer Code": 110028,
      "Customer Name": "SARA PUC CENTERE",
      "City": "PEN",
      "__EMPTY_1": "110028_SARA PUC CENTERE"
    },
    {
      "Customer Code": 110088,
      "Customer Name": "PRAVASI MOTOR TRAINING SCHOOL",
      "City": "NAVI MUMBAI",
      "Amc End": 45225,
      "__EMPTY_1": "110088_PRAVASI MOTOR TRAINING SCHOOL"
    },
    {
      "Customer Code": 110093,
      "Customer Name": "SHREE MAHALAXMI PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45271,
      "__EMPTY_1": "110093_SHREE MAHALAXMI PUC CENTRE"
    },
    {
      "Customer Code": 110094,
      "Customer Name": "SAI GOVINDA PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110094_SAI GOVINDA PUC CENTRE"
    },
    {
      "Customer Code": 110111,
      "Customer Name": "SAI GANESH PUC CENTERE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110111_SAI GANESH PUC CENTERE"
    },
    {
      "Customer Code": 110116,
      "Customer Name": "SARASWATI PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110116_SARASWATI PUC CENTRE"
    },
    {
      "Customer Code": 110122,
      "Customer Name": "EKVIRA PUC CENTRE",
      "City": "URAN",
      "__EMPTY_1": "110122_EKVIRA PUC CENTRE"
    },
    {
      "Customer Code": 110157,
      "Customer Name": "SHRI KRISHNA PUC CENTRE",
      "City": "RAIGAD",
      "__EMPTY_1": "110157_SHRI KRISHNA PUC CENTRE"
    },
    {
      "Customer Code": 110163,
      "Customer Name": "AMEET MOTOR DRIVING SCHOOL",
      "City": "NASHIK",
      "Amc End": 45154,
      "__EMPTY_1": "110163_AMEET MOTOR DRIVING SCHOOL"
    },
    {
      "Customer Code": 110178,
      "Customer Name": "IVOR BRITTO",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110178_IVOR BRITTO"
    },
    {
      "Customer Code": 110179,
      "Customer Name": "SHIV  TYRE SERVICES",
      "City": "BADLAPUR",
      "__EMPTY_1": "110179_SHIV  TYRE SERVICES"
    },
    {
      "Customer Code": 110187,
      "Customer Name": "Shree Om Sai Auto Care Centre",
      "City": "NAVI MUMBAI",
      "Amc End": 45347,
      "__EMPTY_1": "110187_Shree Om Sai Auto Care Centre"
    },
    {
      "Customer Code": 110190,
      "Customer Name": "SHRI KRISHNA ENTERPRISES",
      "City": "KHALAPUR",
      "__EMPTY_1": "110190_SHRI KRISHNA ENTERPRISES"
    },
    {
      "Customer Code": 110206,
      "Customer Name": "TANISHKA ENTERPRISES",
      "City": "RAIGAD",
      "__EMPTY_1": "110206_TANISHKA ENTERPRISES"
    },
    {
      "Customer Code": 110244,
      "Customer Name": "SAISHA PUC CENTRE",
      "City": "BHIWANDI",
      "Amc End": 45108,
      "__EMPTY_1": "110244_SAISHA PUC CENTRE"
    },
    {
      "Customer Code": 110289,
      "Customer Name": "GAIKWAD PUC CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "110289_GAIKWAD PUC CENTRE"
    },
    {
      "Customer Code": 110305,
      "Customer Name": "BENZ AUTO EMISSION",
      "City": "AMBERNATH",
      "__EMPTY_1": "110305_BENZ AUTO EMISSION"
    },
    {
      "Customer Code": 110315,
      "Customer Name": "JAI MATA DI PUC",
      "City": "URAN",
      "__EMPTY_1": "110315_JAI MATA DI PUC"
    },
    {
      "Customer Code": 110359,
      "Customer Name": "JAY GANESH PUC CENTRE, VASHI",
      "City": "NAVI MUMBAI",
      "Amc End": 45307,
      "__EMPTY_1": "110359_JAY GANESH PUC CENTRE, VASHI"
    },
    {
      "Customer Code": 110361,
      "Customer Name": "BABA PUC CENTRE",
      "City": "JALGAON",
      "__EMPTY_1": "110361_BABA PUC CENTRE"
    },
    {
      "Customer Code": 110376,
      "Customer Name": "Dronagiri Service Centre",
      "City": "URAN",
      "__EMPTY_1": "110376_Dronagiri Service Centre"
    },
    {
      "Customer Code": 110379,
      "Customer Name": "RUDRA PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110379_RUDRA PUC CENTRE"
    },
    {
      "Customer Code": 110380,
      "Customer Name": "SARASWATI COLLEGE OF ENGINEERING",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110380_SARASWATI COLLEGE OF ENGINEERING"
    },
    {
      "Customer Code": 110393,
      "Customer Name": "ARYAN PUC CENTER",
      "City": "DOMBIVALI",
      "__EMPTY_1": "110393_ARYAN PUC CENTER"
    },
    {
      "Customer Code": 110398,
      "Customer Name": "MAULI PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110398_MAULI PUC CENTRE"
    },
    {
      "Customer Code": 110399,
      "Customer Name": "S.R.B. PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "110399_S.R.B. PUC CENTRE"
    },
    {
      "Customer Code": 110403,
      "Customer Name": "SHREE  MAHALAXMI  P.U.C. CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45299,
      "__EMPTY_1": "110403_SHREE  MAHALAXMI  P.U.C. CENTRE"
    },
    {
      "Customer Code": 110431,
      "Customer Name": "SHEETAL PUC CENTRE",
      "City": "BHIWANDI",
      "__EMPTY_1": "110431_SHEETAL PUC CENTRE"
    },
    {
      "Customer Code": 110433,
      "Customer Name": "OM VINAYAK PETROLEUM",
      "City": "BHIWANDI",
      "__EMPTY_1": "110433_OM VINAYAK PETROLEUM"
    },
    {
      "Customer Code": 110445,
      "Customer Name": "SAI PUC CENTRE",
      "City": "DOMBIVALI",
      "__EMPTY_1": "110445_SAI PUC CENTRE"
    },
    {
      "Customer Code": 110462,
      "Customer Name": "PRANAV PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110462_PRANAV PUC CENTRE"
    },
    {
      "Customer Code": 110463,
      "Customer Name": "BHAKTI PUC CENTRE",
      "City": "BADLAPUR",
      "__EMPTY_1": "110463_BHAKTI PUC CENTRE"
    },
    {
      "Customer Code": 110464,
      "Customer Name": "AUTO WHEELS",
      "City": "KHARGHAR",
      "__EMPTY_1": "110464_AUTO WHEELS"
    },
    {
      "Customer Code": 110469,
      "Customer Name": "AJINKYTARA PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110469_AJINKYTARA PUC CENTRE"
    },
    {
      "Customer Code": 110476,
      "Customer Name": "SHRADHA SABURI P.U.C. CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110476_SHRADHA SABURI P.U.C. CENTRE"
    },
    {
      "Customer Code": 110488,
      "Customer Name": "MATOSHRI PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110488_MATOSHRI PUC CENTRE"
    },
    {
      "Customer Code": 110491,
      "Customer Name": "S.B. Enterprises",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110491_S.B. Enterprises"
    },
    {
      "Customer Code": 110496,
      "Customer Name": "KHUSHBU  PUC  CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110496_KHUSHBU  PUC  CENTRE"
    },
    {
      "Customer Code": 110506,
      "Customer Name": "Poonam Motors",
      "City": "BADLAPUR",
      "__EMPTY_1": "110506_Poonam Motors"
    },
    {
      "Customer Code": 110507,
      "Customer Name": "GANRAJ  AUTO SERVICE PUC CENTER",
      "City": "NAVI MUMBAI",
      "Amc End": 45369,
      "__EMPTY_1": "110507_GANRAJ  AUTO SERVICE PUC CENTER"
    },
    {
      "Customer Code": 110517,
      "Customer Name": "SHREE UMA PETROLEUM",
      "City": "RAIGAD",
      "__EMPTY_1": "110517_SHREE UMA PETROLEUM"
    },
    {
      "Customer Code": 110541,
      "Customer Name": "TANISHKA  PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110541_TANISHKA  PUC CENTRE"
    },
    {
      "Customer Code": 110543,
      "Customer Name": "KRISHNA RAIBHAN PATIL",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "110543_KRISHNA RAIBHAN PATIL"
    },
    {
      "Customer Code": 111450,
      "Customer Name": "EKVEERA PUC CENTRE",
      "City": "TALOJA",
      "__EMPTY_1": "111450_EKVEERA PUC CENTRE"
    },
    {
      "Customer Code": 111451,
      "Customer Name": "SHUBHLAXMI PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111451_SHUBHLAXMI PUC CENTRE"
    },
    {
      "Customer Code": 111454,
      "Customer Name": "E. HAQUE PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45335,
      "__EMPTY_1": "111454_E. HAQUE PUC CENTRE"
    },
    {
      "Customer Code": 111474,
      "Customer Name": "Khan Auto Consultants",
      "City": "AMBERNATH",
      "__EMPTY_1": "111474_Khan Auto Consultants"
    },
    {
      "Customer Code": 111477,
      "Customer Name": "K.G.N. PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111477_K.G.N. PUC CENTRE"
    },
    {
      "Customer Code": 111496,
      "Customer Name": "SAHIL  SERVICE  CENTRE",
      "City": "KHALAPUR",
      "__EMPTY_1": "111496_SAHIL  SERVICE  CENTRE"
    },
    {
      "Customer Code": 111505,
      "Customer Name": "KRISHNA  PUC  CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111505_KRISHNA  PUC  CENTRE"
    },
    {
      "Customer Code": 111510,
      "Customer Name": "ASHTAVINAYAK  MOTOR TRAINING  SCHOOL",
      "City": "BADLAPUR",
      "__EMPTY_1": "111510_ASHTAVINAYAK  MOTOR TRAINING  SCHOOL"
    },
    {
      "Customer Code": 111514,
      "Customer Name": "Gaikwad PUC Centre",
      "City": "RAIGAD",
      "__EMPTY_1": "111514_Gaikwad PUC Centre"
    },
    {
      "Customer Code": 111521,
      "Customer Name": "BHARAT  TRANSPORT COMPANY",
      "City": "BHIWANDI",
      "__EMPTY_1": "111521_BHARAT  TRANSPORT COMPANY"
    },
    {
      "Customer Code": 111522,
      "Customer Name": "CHINMAY  PUC CENTRE",
      "City": "BHIWANDI",
      "__EMPTY_1": "111522_CHINMAY  PUC CENTRE"
    },
    {
      "Customer Code": 111526,
      "Customer Name": "SAI  POOJA  PUC  CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45341,
      "__EMPTY_1": "111526_SAI  POOJA  PUC  CENTRE"
    },
    {
      "Customer Code": 111538,
      "Customer Name": "VIGNAHARTA PUC CENTRE",
      "City": "AMBERNATH",
      "__EMPTY_1": "111538_VIGNAHARTA PUC CENTRE"
    },
    {
      "Customer Code": 111552,
      "Customer Name": "AKSHAT PUC CENTRE",
      "City": "DOMBIVALI",
      "__EMPTY_1": "111552_AKSHAT PUC CENTRE"
    },
    {
      "Customer Code": 111553,
      "Customer Name": "RIDDHI PUC CENTRE",
      "City": "URAN",
      "__EMPTY_1": "111553_RIDDHI PUC CENTRE"
    },
    {
      "Customer Code": 111559,
      "Customer Name": "K.K. PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45112,
      "__EMPTY_1": "111559_K.K. PUC CENTRE"
    },
    {
      "Customer Code": 111588,
      "Customer Name": "MATOSHRI PUC CENTRE, VASHI VILLAGE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111588_MATOSHRI PUC CENTRE, VASHI VILLAGE"
    },
    {
      "Customer Code": 111607,
      "Customer Name": "SAI AUTOMOBILES PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NASHIK",
      "Amc End": 45169,
      "__EMPTY_1": "111607_SAI AUTOMOBILES PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111623,
      "Customer Name": "SHREE SAMARTH PUC CENTRE (S.K.)\t\t\t\t\t\t\t\t\t",
      "City": "RAIGAD",
      "__EMPTY_1": "111623_SHREE SAMARTH PUC CENTRE (S.K.)\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111627,
      "Customer Name": "B.P. MAHAPE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111627_B.P. MAHAPE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111631,
      "Customer Name": "52 PROPERTIES\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111631_52 PROPERTIES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111672,
      "Customer Name": "MATOSHREE PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DOMBIVALI",
      "__EMPTY_1": "111672_MATOSHREE PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111690,
      "Customer Name": "MATOSHRI PUC CENTRE, KHAIRANE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111690_MATOSHRI PUC CENTRE, KHAIRANE"
    },
    {
      "Customer Code": 111701,
      "Customer Name": "SONY PETROLEUM PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "RAIGAD",
      "__EMPTY_1": "111701_SONY PETROLEUM PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111714,
      "Customer Name": "NAYANA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "111714_NAYANA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111735,
      "Customer Name": "SWARAJ PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111735_SWARAJ PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111737,
      "Customer Name": "SHREE SHAMBHU PUC CENTRE-BHIWANDI",
      "City": "BHIWANDI",
      "Amc End": 45348,
      "__EMPTY_1": "111737_SHREE SHAMBHU PUC CENTRE-BHIWANDI"
    },
    {
      "Customer Code": 111771,
      "Customer Name": "APM FUEL CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111771_APM FUEL CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111803,
      "Customer Name": "RUDRA PUC CENTER, AMBERNATH",
      "City": "AMBERNATH",
      "__EMPTY_1": "111803_RUDRA PUC CENTER, AMBERNATH"
    },
    {
      "Customer Code": 111817,
      "Customer Name": "NIRMAL PUC CENTRE, DIGHA",
      "City": "NAVI MUMBAI",
      "Amc End": 45462,
      "__EMPTY_1": "111817_NIRMAL PUC CENTRE, DIGHA"
    },
    {
      "Customer Code": 111842,
      "Customer Name": "SHIV  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BADLAPUR",
      "__EMPTY_1": "111842_SHIV  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111856,
      "Customer Name": "BHAVANI  ENTERPRISES\t\t\t\t\t\t\t\t\t",
      "City": "BHIWANDI",
      "__EMPTY_1": "111856_BHAVANI  ENTERPRISES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111873,
      "Customer Name": "KETAN PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "111873_KETAN PUC CENTRE"
    },
    {
      "Customer Code": 111883,
      "Customer Name": "SHIV MUDRA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMBERNATH",
      "__EMPTY_1": "111883_SHIV MUDRA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111906,
      "Customer Name": "MIRAJ BATTERIES SALES & SERVICE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "Amc End": 45314,
      "__EMPTY_1": "111906_MIRAJ BATTERIES SALES & SERVICE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111923,
      "Customer Name": "YUVRAJ  AUTO CONSULTANTS\t\t\t\t\t\t\t\t\t",
      "City": "BADLAPUR",
      "__EMPTY_1": "111923_YUVRAJ  AUTO CONSULTANTS\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111932,
      "Customer Name": "SAGAR PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45348,
      "__EMPTY_1": "111932_SAGAR PUC CENTRE"
    },
    {
      "Customer Code": 111952,
      "Customer Name": "HARI OM PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "URAN",
      "__EMPTY_1": "111952_HARI OM PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111953,
      "Customer Name": "SHREE RAM PUC CENTRE, PANVEL\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "111953_SHREE RAM PUC CENTRE, PANVEL\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 111964,
      "Customer Name": "RAVI AUTOMOBILES & PUC CENTRE",
      "City": "NASHIK",
      "__EMPTY_1": "111964_RAVI AUTOMOBILES & PUC CENTRE"
    },
    {
      "Customer Code": 111966,
      "Customer Name": "Z K PUC CENTRE",
      "City": "JALGAON",
      "__EMPTY_1": "111966_Z K PUC CENTRE"
    },
    {
      "Customer Code": 111967,
      "Customer Name": "MADHU  CHAUDHARY",
      "City": "JALGAON",
      "Amc End": 45303,
      "__EMPTY_1": "111967_MADHU  CHAUDHARY"
    },
    {
      "Customer Code": 111990,
      "Customer Name": "RAVI AUTOMOBILES & PUC CENTRE",
      "City": "NASHIK",
      "__EMPTY_1": "111990_RAVI AUTOMOBILES & PUC CENTRE"
    },
    {
      "Customer Code": 112417,
      "Customer Name": "JOHAR PUC CENTRE",
      "City": "NASHIK",
      "__EMPTY_1": "112417_JOHAR PUC CENTRE"
    },
    {
      "Customer Code": 118064,
      "Customer Name": "KIRAN PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "118064_KIRAN PUC CENTRE"
    },
    {
      "Customer Code": 130058,
      "Customer Name": "SAI GANESH PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130058_SAI GANESH PUC CENTRE"
    },
    {
      "Customer Code": 130114,
      "Customer Name": "SHRI SAI MULTIPURPOSE SERVICES\t\t\t\t\t\t\t\t\t",
      "City": "JALGAON",
      "Amc End": 45108,
      "__EMPTY_1": "130114_SHRI SAI MULTIPURPOSE SERVICES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130115,
      "Customer Name": "PRASHIK ONLINE PUC CENTRE",
      "City": "JALGAON",
      "Amc End": 45265,
      "__EMPTY_1": "130115_PRASHIK ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 130141,
      "Customer Name": "GUDDU PUC CENTRE",
      "City": "DOMBIVALI",
      "__EMPTY_1": "130141_GUDDU PUC CENTRE"
    },
    {
      "Customer Code": 130149,
      "Customer Name": "MALHARI PUC CENTRE, BHIWANDI \t\t\t\t\t\t\t\t\t",
      "City": "BHIWANDI",
      "__EMPTY_1": "130149_MALHARI PUC CENTRE, BHIWANDI \t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130184,
      "Customer Name": "MEGHA PUC CENTRE",
      "City": "BHIWANDI",
      "__EMPTY_1": "130184_MEGHA PUC CENTRE"
    },
    {
      "Customer Code": 130192,
      "Customer Name": "MARUTI RAMU POWAR",
      "City": "BHIWANDI",
      "Amc End": 45255,
      "__EMPTY_1": "130192_MARUTI RAMU POWAR"
    },
    {
      "Customer Code": 130233,
      "Customer Name": "ELAM  BATTERIES\t\t\t\t\t\t\t\t\t",
      "City": "DOMBIVALI",
      "Amc End": 45314,
      "__EMPTY_1": "130233_ELAM  BATTERIES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130242,
      "Customer Name": "TELAVANE MULTI SERVICE CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "KHOPOLI",
      "Amc End": 45294,
      "__EMPTY_1": "130242_TELAVANE MULTI SERVICE CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130246,
      "Customer Name": "SHIVBABA  PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BHIWANDI",
      "__EMPTY_1": "130246_SHIVBABA  PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130256,
      "Customer Name": "MANISH SERVICE CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130256_MANISH SERVICE CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130267,
      "Customer Name": "ANSHUL PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130267_ANSHUL PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130274,
      "Customer Name": "ONLINE DEVANSH POOJA PUC CENTRE",
      "City": "BHIWANDI",
      "__EMPTY_1": "130274_ONLINE DEVANSH POOJA PUC CENTRE"
    },
    {
      "Customer Code": 130284,
      "Customer Name": "ARYAN PUC CENTER",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130284_ARYAN PUC CENTER"
    },
    {
      "Customer Code": 130317,
      "Customer Name": "PERFECT TYRES\t\t\t\t\t\t\t\t\t",
      "City": "NASHIK",
      "__EMPTY_1": "130317_PERFECT TYRES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130336,
      "Customer Name": "SAMARTH PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130336_SAMARTH PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130346,
      "Customer Name": "R.K. TRADE PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DOMBIVALI",
      "Amc End": 45328,
      "__EMPTY_1": "130346_R.K. TRADE PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130356,
      "Customer Name": "Ashapak PUC Centre",
      "City": "NASHIK",
      "__EMPTY_1": "130356_Ashapak PUC Centre"
    },
    {
      "Customer Code": 130358,
      "Customer Name": "National PUC Centre",
      "City": "JALGAON",
      "Amc End": 45154,
      "__EMPTY_1": "130358_National PUC Centre"
    },
    {
      "Customer Code": 130384,
      "Customer Name": "NILESH AUTOMOBILES\t\t\t\t\t\t\t\t\t",
      "City": "MAHAD",
      "Amc End": 45314,
      "__EMPTY_1": "130384_NILESH AUTOMOBILES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130400,
      "Customer Name": "PRASHIK  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "JALGAON",
      "__EMPTY_1": "130400_PRASHIK  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130427,
      "Customer Name": "GIMIT PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "ROHA",
      "__EMPTY_1": "130427_GIMIT PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130430,
      "Customer Name": "SANJAY B. MALIK",
      "City": "BHIWANDI",
      "__EMPTY_1": "130430_SANJAY B. MALIK"
    },
    {
      "Customer Code": 130439,
      "Customer Name": "Matoshri  PUC Centre\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130439_Matoshri  PUC Centre\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130447,
      "Customer Name": "KAMLESH SHASHIKANT KELKAR",
      "City": "NAVI MUMBAI",
      "Amc End": 45162,
      "__EMPTY_1": "130447_KAMLESH SHASHIKANT KELKAR"
    },
    {
      "Customer Code": 130474,
      "Customer Name": "OM SAI PUC CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "130474_OM SAI PUC CENTRE"
    },
    {
      "Customer Code": 130476,
      "Customer Name": "MR. PRABHAKAR PITAMBAR PATIL\t\t\t\t\t\t\t\t\t",
      "City": "JALGAON",
      "__EMPTY_1": "130476_MR. PRABHAKAR PITAMBAR PATIL\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130498,
      "Customer Name": "GAIKWAD  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130498_GAIKWAD  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130503,
      "Customer Name": "UNISON SERVICES\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "Amc End": 45288,
      "__EMPTY_1": "130503_UNISON SERVICES\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130511,
      "Customer Name": "MAHADEV PUC  CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t",
      "City": "AMBERNATH",
      "Amc End": 45245,
      "__EMPTY_1": "130511_MAHADEV PUC  CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130512,
      "Customer Name": "JAI BHOLE PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130512_JAI BHOLE PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130513,
      "Customer Name": "BHAGWATI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130513_BHAGWATI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130514,
      "Customer Name": "JAI MAA BACHHETAR PUC CENT-JHA\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130514_JAI MAA BACHHETAR PUC CENT-JHA\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130515,
      "Customer Name": "JAI SHIV  PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t",
      "City": "BADLAPUR",
      "__EMPTY_1": "130515_JAI SHIV  PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130516,
      "Customer Name": "SAI SHIV  PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BADLAPUR",
      "__EMPTY_1": "130516_SAI SHIV  PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130517,
      "Customer Name": "JAI MAA PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130517_JAI MAA PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130519,
      "Customer Name": "JAI BHAWANI PUC CENTER-ANAND JHA\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130519_JAI BHAWANI PUC CENTER-ANAND JHA\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130520,
      "Customer Name": "GANESH PUC CENTRE\t-ANAND JHA\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130520_GANESH PUC CENTRE\t-ANAND JHA\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130521,
      "Customer Name": "DRISHTI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130521_DRISHTI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130526,
      "Customer Name": "JAI  MALHAR PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BHIWANDI",
      "Amc End": 45366,
      "__EMPTY_1": "130526_JAI  MALHAR PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130527,
      "Customer Name": "SADGURU PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "Amc End": 45108,
      "__EMPTY_1": "130527_SADGURU PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130529,
      "Customer Name": "ASTRO SECURITY SERVICES PVT. LTD.\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "Amc End": 45391,
      "__EMPTY_1": "130529_ASTRO SECURITY SERVICES PVT. LTD.\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130536,
      "Customer Name": "WAGHESHWARI PUC CENTRE",
      "City": "AMBERNATH",
      "Amc End": 45204,
      "__EMPTY_1": "130536_WAGHESHWARI PUC CENTRE"
    },
    {
      "Customer Code": 130542,
      "Customer Name": "SHRI KRISHNA PUC CENTRE",
      "City": "AMBERNATH",
      "__EMPTY_1": "130542_SHRI KRISHNA PUC CENTRE"
    },
    {
      "Customer Code": 130546,
      "Customer Name": "SWARA PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45247,
      "__EMPTY_1": "130546_SWARA PUC CENTRE"
    },
    {
      "Customer Code": 130548,
      "Customer Name": "BHARAT PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130548_BHARAT PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130549,
      "Customer Name": "SAPNA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BHIWANDI",
      "Amc End": 45216,
      "__EMPTY_1": "130549_SAPNA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130550,
      "Customer Name": "ISHANVI AUTO CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "RAIGAD",
      "__EMPTY_1": "130550_ISHANVI AUTO CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130551,
      "Customer Name": "VIAAN PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "RAIGAD",
      "Amc End": 45135,
      "__EMPTY_1": "130551_VIAAN PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130552,
      "Customer Name": "JAI MAHARASHTRA PUC CENTRE",
      "City": "JALGAON",
      "Amc End": 45363,
      "__EMPTY_1": "130552_JAI MAHARASHTRA PUC CENTRE"
    },
    {
      "Customer Code": 130554,
      "Customer Name": "M.K. PUC CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "130554_M.K. PUC CENTRE"
    },
    {
      "Customer Code": 130557,
      "Customer Name": "SAI GANESH PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130557_SAI GANESH PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130562,
      "Customer Name": "SHREE KRISHNA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "AMBERNATH",
      "__EMPTY_1": "130562_SHREE KRISHNA PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130563,
      "Customer Name": "SHREE RADHE PUC CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "130563_SHREE RADHE PUC CENTRE"
    },
    {
      "Customer Code": 130564,
      "Customer Name": "NANDANI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL",
      "__EMPTY_1": "130564_NANDANI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130572,
      "Customer Name": "NEW K.K. PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BELAPUR",
      "Amc End": 45336,
      "__EMPTY_1": "130572_NEW K.K. PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130574,
      "Customer Name": "OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "BELAPUR",
      "Amc End": 45208,
      "__EMPTY_1": "130574_OM SAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130589,
      "Customer Name": "EKVEERA PUC  CENTRE\t\t\t\t\t\t\t\t",
      "City": "NAVI MUMBAI",
      "Amc End": 45253,
      "__EMPTY_1": "130589_EKVEERA PUC  CENTRE\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130590,
      "Customer Name": "NEW K. K. PUC CENTRE",
      "City": "BELAPUR",
      "Amc End": 45239,
      "__EMPTY_1": "130590_NEW K. K. PUC CENTRE"
    },
    {
      "Customer Code": 130591,
      "Customer Name": "NEW K. K PUC CENTRE",
      "City": "KHALAPUR",
      "Amc End": 45239,
      "__EMPTY_1": "130591_NEW K. K PUC CENTRE"
    },
    {
      "Customer Code": 130600,
      "Customer Name": "Maa Basuli PUC Centre",
      "City": "BHIWANDI",
      "__EMPTY_1": "130600_Maa Basuli PUC Centre"
    },
    {
      "Customer Code": 130601,
      "Customer Name": "GARIMA PUC  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DOMBIVALI",
      "__EMPTY_1": "130601_GARIMA PUC  CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130602,
      "Customer Name": "MR. GUNESH BHOIR\t\t\t\t\t\t\t\t\t",
      "City": "DOMBIVALI",
      "__EMPTY_1": "130602_MR. GUNESH BHOIR\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130604,
      "Customer Name": "SHREEJI KRUPA ENTERPRISES",
      "City": "BHIWANDI",
      "__EMPTY_1": "130604_SHREEJI KRUPA ENTERPRISES"
    },
    {
      "Customer Code": 130606,
      "Customer Name": "GAIKWAD PUC  CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "130606_GAIKWAD PUC  CENTRE"
    },
    {
      "Customer Code": 130612,
      "Customer Name": "OM PUC  CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130612_OM PUC  CENTRE"
    },
    {
      "Customer Code": 130616,
      "Customer Name": "KASHINATH G. PATIL PUC CENTRE",
      "City": "NAVI MUMBAI",
      "Amc End": 45309,
      "__EMPTY_1": "130616_KASHINATH G. PATIL PUC CENTRE"
    },
    {
      "Customer Code": 130623,
      "Customer Name": "SWARAJ PUC CENTRE",
      "City": "PANVEL",
      "Amc End": 45293,
      "__EMPTY_1": "130623_SWARAJ PUC CENTRE"
    },
    {
      "Customer Code": 130627,
      "Customer Name": "RABALE FUEL SERVICES",
      "City": "NAVI MUMBAI",
      "Amc End": 45295,
      "__EMPTY_1": "130627_RABALE FUEL SERVICES"
    },
    {
      "Customer Code": 130634,
      "Customer Name": "ZAHIDA KHATOON PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "PANVEL\t\t",
      "__EMPTY_1": "130634_ZAHIDA KHATOON PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130637,
      "Customer Name": "SAI SERVICES, NASHIK",
      "City": "NASHIK",
      "Amc End": 45337,
      "__EMPTY_1": "130637_SAI SERVICES, NASHIK"
    },
    {
      "Customer Code": 130645,
      "Customer Name": "KIRTI BHASKAR JANGALE PUC CENTER",
      "City": "BHUSAVAL",
      "Amc End": 45363,
      "__EMPTY_1": "130645_KIRTI BHASKAR JANGALE PUC CENTER"
    },
    {
      "Customer Code": 130648,
      "Customer Name": "MR. DHARMENDRA UPADHYAY",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130648_MR. DHARMENDRA UPADHYAY"
    },
    {
      "Customer Code": 130664,
      "Customer Name": "M D PUC CENTRE",
      "City": "PANVEL",
      "Amc End": 45315,
      "__EMPTY_1": "130664_M D PUC CENTRE"
    },
    {
      "Customer Code": 130670,
      "Customer Name": "SHAIKH PUC CENTRE",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130670_SHAIKH PUC CENTRE"
    },
    {
      "Customer Code": 130703,
      "Customer Name": "ASTHA PUC CENTRE",
      "City": "JALGAON",
      "Amc End": 45397,
      "__EMPTY_1": "130703_ASTHA PUC CENTRE"
    },
    {
      "Customer Code": 130721,
      "Customer Name": "NOOR PUC CENTRE",
      "City": "PANVEL",
      "Amc End": 45125,
      "__EMPTY_1": "130721_NOOR PUC CENTRE"
    },
    {
      "Customer Code": 130726,
      "Customer Name": "Shree Sadguru Krupa PUC Centre",
      "City": "BHIWANDI",
      "__EMPTY_1": "130726_Shree Sadguru Krupa PUC Centre"
    },
    {
      "Customer Code": 130734,
      "Customer Name": "SACHCHIDANAND SHAHAJAD SAGAR",
      "City": "THAKURLI",
      "__EMPTY_1": "130734_SACHCHIDANAND SHAHAJAD SAGAR"
    },
    {
      "Customer Code": 130743,
      "Customer Name": "RUSHIKESH PUC CENTRE",
      "City": "BHIWANDI",
      "__EMPTY_1": "130743_RUSHIKESH PUC CENTRE"
    },
    {
      "Customer Code": 130762,
      "Customer Name": "PATEL PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "130762_PATEL PUC CENTRE"
    },
    {
      "Customer Code": 130763,
      "Customer Name": "AMIT ENTERPRISES",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130763_AMIT ENTERPRISES"
    },
    {
      "Customer Code": 130849,
      "Customer Name": "GAURI PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t",
      "City": "AMBERNATH",
      "Amc End": 45245,
      "__EMPTY_1": "130849_GAURI PUC CENTRE-ANAND JHA\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130855,
      "Customer Name": "SAI PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "DOMBIVALI",
      "__EMPTY_1": "130855_SAI PUC CENTRE\t\t\t\t\t\t\t\t\t"
    },
    {
      "Customer Code": 130901,
      "Customer Name": "Mangesh PUC Centre",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130901_Mangesh PUC Centre"
    },
    {
      "Customer Code": 130911,
      "Customer Name": "New Capital Wheel Care",
      "City": "NASHIK",
      "Amc End": 45331,
      "__EMPTY_1": "130911_New Capital Wheel Care"
    },
    {
      "Customer Code": 130924,
      "Customer Name": "Jay Malhar Online PUC Centre",
      "City": "PEN",
      "__EMPTY_1": "130924_Jay Malhar Online PUC Centre"
    },
    {
      "Customer Code": 130930,
      "Customer Name": "SHREE HARI OM MOTOR TRAINING SCHOOL",
      "City": "AIROLI",
      "__EMPTY_1": "130930_SHREE HARI OM MOTOR TRAINING SCHOOL"
    },
    {
      "Customer Code": 130939,
      "Customer Name": "BHARATI PUC CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "130939_BHARATI PUC CENTRE"
    },
    {
      "Customer Code": 130945,
      "Customer Name": "SHREE SADGURU KRUPA PUC",
      "City": "BHIWANDI",
      "__EMPTY_1": "130945_SHREE SADGURU KRUPA PUC"
    },
    {
      "Customer Code": 130961,
      "Customer Name": "HAFIZ PUC CENTRE",
      "City": "PANVEL",
      "__EMPTY_1": "130961_HAFIZ PUC CENTRE"
    },
    {
      "Customer Code": 130971,
      "Customer Name": "CAR GALLARY",
      "City": "JALGAON",
      "__EMPTY_1": "130971_CAR GALLARY"
    },
    {
      "Customer Code": 130972,
      "Customer Name": "RP ENTERPRISES",
      "City": "PANVEL",
      "__EMPTY_1": "130972_RP ENTERPRISES"
    },
    {
      "Customer Code": 130975,
      "Customer Name": "Sai Suraj RTO Consultant",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130975_Sai Suraj RTO Consultant"
    },
    {
      "Customer Code": 130984,
      "Customer Name": "Avantika PUC Centre",
      "City": "NAVI MUMBAI",
      "__EMPTY_1": "130984_Avantika PUC Centre"
    },
    {
      "Customer Code": 131025,
      "Customer Name": "RADHA RANI PUC CENTRE",
      "City": "THANE",
      "__EMPTY_1": "131025_RADHA RANI PUC CENTRE"
    },
    {
      "Customer Code": 131041,
      "Customer Name": "Om Sai Enterprises HP",
      "City": "AIROLI",
      "__EMPTY_1": "131041_Om Sai Enterprises HP"
    },
    {
      "Customer Code": 131043,
      "Customer Name": "Shree Sairam Enterprises",
      "City": "KHARGHAR",
      "__EMPTY_1": "131043_Shree Sairam Enterprises"
    },
    {
      "Customer Code": 131060,
      "Customer Name": "DOSI MOTORS",
      "City": "MAHAD",
      "__EMPTY_1": "131060_DOSI MOTORS"
    },
    {
      "Customer Code": 131083,
      "Customer Name": "OMKAR PUC CENTER",
      "City": "SHAHAPUR",
      "__EMPTY_1": "131083_OMKAR PUC CENTER"
    },
    {
      "Customer Code": 131098,
      "Customer Name": "SHRI RAM PUC CENTER",
      "City": "BHIWANDI",
      "__EMPTY_1": "131098_SHRI RAM PUC CENTER"
    },
    {
      "Customer Code": 131130,
      "Customer Name": "SAI TYRE SERVICES",
      "City": "DOMBIVALI",
      "__EMPTY_1": "131130_SAI TYRE SERVICES"
    },
    {
      "Customer Code": 131143,
      "Customer Name": "MAUL ONLINE PUC CENTRE",
      "City": "PEN",
      "__EMPTY_1": "131143_MAUL ONLINE PUC CENTRE"
    },
    {
      "Customer Code": 131149,
      "Customer Name": "SUNRAJ AUTO WORK",
      "City": "DOMBIVALI",
      "__EMPTY_1": "131149_SUNRAJ AUTO WORK"
    },
    {
      "Customer Code": 1214
    },
    {
      "Customer Code": "GOA"
    },
    {
      "Customer Code": 130568,
      "Customer Name": "DHANRAJ SERVICE CENTRE",
      "City": "CANACONA"
    },
    {
      "Customer Code": 130792,
      "Customer Name": "SHANTADURGA POLLUTION CHECK CENTRE",
      "City": "NORTH GOA "
    },
    {
      "Customer Code": 130463,
      "Customer Name": "GANPAT  H. KURTIKER\t, GOA",
      "City": "PONDA"
    },
    {
      "Customer Code": 130424,
      "Customer Name": "POLLUTION TESTING  CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "GOA"
    },
    {
      "Customer Code": 130420,
      "Customer Name": "SRI GANESHA PUC CENTRE\t\t\t\t\t\t\t\t\t",
      "City": "GOA"
    },
    {
      "Customer Code": 130415,
      "Customer Name": "SAHAKARI  PETROLEUM\t\t\t\t\t\t\t\t\t",
      "City": "GOA"
    },
    {
      "Customer Code": 130169,
      "Customer Name": "Xtra Miles Tyres Service",
      "City": "SOUTH GOA"
    },
    {
      "Customer Code": 130108,
      "Customer Name": "P. M. ENTERPRISES",
      "City": "MAROD"
    },
    {
      "Customer Code": 130136,
      "Customer Name": "AUTO GALLERY",
      "City": "GOA"
    },
    {
      "Customer Code": 108471,
      "Customer Name": "Sai Auto Pollution Centre",
      "City": "Curchorem"
    },
    {
      "Customer Code": 111999,
      "Customer Name": "VIKRAM V. NAIK",
      "City": "WADDO"
    },
    {
      "Customer Code": 111937,
      "Customer Name": "KAMAKSHI  AUTO POLLUTION CHECKING CENTRE",
      "City": "BEPQUEGAL"
    },
    {
      "Customer Code": 111935,
      "Customer Name": "GAURESH ENTERPRISES",
      "City": "SANCAOLE"
    },
    {
      "Customer Code": 111890,
      "Customer Name": "SAI SAMARTH PUC CENTRE",
      "City": "VASCO DA GAMA"
    },
    {
      "Customer Code": 111866,
      "Customer Name": "RUCHIKA POLLUTION TESTING CENTRE",
      "City": "PONDA"
    },
    {
      "Customer Code": 111808,
      "Customer Name": "SANKET PUC CENTRE",
      "City": "GOA"
    },
    {
      "Customer Code": 111715,
      "Customer Name": "GANPAT  H. KURTIKER\t, PONDA\t",
      "City": "PONDA"
    },
    {
      "Customer Code": 111702,
      "Customer Name": "Sarvesh Pollution Testing Centre",
      "City": "BETHORA"
    },
    {
      "Customer Code": 108154,
      "Customer Name": "Dukle Auto Care Centre.Goa",
      "City": "Madgaon"
    },
    {
      "Customer Code": 109940,
      "Customer Name": "Gurukul Pollution Checking Center",
      "City": "Marcela"
    },
    {
      "Customer Code": 110085,
      "Customer Name": "Super Pollution Testing Centre",
      "City": "Mapusa"
    },
    {
      "Customer Code": 111603,
      "Customer Name": "OM DATTA POLLUTION TESTING  CENTRE\t\t\t\t\t",
      "City": "CUNCOLIM"
    },
    {
      "Customer Code": 111557,
      "Customer Name": "Kusum Pollution Testing Centre",
      "City": "GOA"
    },
    {
      "Customer Code": 111480,
      "Customer Name": "TYRE TECH",
      "City": "GOA"
    },
    {
      "Customer Code": 111455,
      "Customer Name": "Vidi Pollution Testing Centre",
      "City": "Goa"
    },
    {
      "Customer Code": 111444,
      "Customer Name": "Dosti Pollution Testing Centre",
      "City": "Margoa"
    },
    {
      "Customer Code": 110521,
      "Customer Name": "TOTAL TYRE SERVICE",
      "City": "Goa"
    },
    {
      "Customer Code": 110457,
      "Customer Name": "BIRLA INSTITUTE OF TECHNOLOGY & SCIENCE",
      "City": "ZUARINAGAR"
    },
    {
      "Customer Code": 110435,
      "Customer Name": "P.Y. AUTO POLLUTION CENTRE",
      "City": "SANVORDEM"
    },
    {
      "Customer Code": 110055,
      "Customer Name": "AG ENTERPRISES",
      "City": "PONDA"
    },
    {
      "Customer Code": 109983,
      "Customer Name": "SAMARTH PUC CENTER",
      "City": "PONDA"
    },
    {
      "Customer Code": 109978,
      "Customer Name": "Utkarsh Pollution Testing Centre",
      "City": "Pernem"
    },
    {
      "Customer Code": 109941,
      "Customer Name": "Alister  Tyre Services",
      "City": "Gogol"
    },
    {
      "Customer Code": 109940,
      "Customer Name": "Gurukul Pollution Checking Center",
      "City": "Marcela"
    },
    {
      "Customer Code": 109832,
      "Customer Name": "Harichandra Pollution Checking Centre",
      "City": "Mapusa"
    },
    {
      "Customer Code": 108293,
      "Customer Name": "Janata Motor Garage.Goa",
      "City": "Vasco"
    },
    {
      "Customer Code": 111657,
      "Customer Name": "AVISH ENTERPRISES",
      "City": "OLD GOA"
    },
    {
      "Customer Code": 130833,
      "Customer Name": "R S Autotech",
      "City": "SOUTH GOA"
    }
  ]
  newArr : any = [];
  constructor(private router : Router){
    this.router.navigate(['login']);

    for(let i = 0 ; i < this.arr.length ; i++ ){
      let d = this.arr[i];
      let obj : any = {};
      obj['customerCode'] = d['Customer Code'].toString();
      obj['customerName'] = d['Customer Name'];
      obj['city'] = d['City'];
      obj['amcDue'] = d['Amc End'] ? d['Amc End'].toString() : "";
      this.newArr.push(obj);
    }

    console.log("this.newArr", JSON.stringify(this.newArr));
  }
}
