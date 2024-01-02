import { React, useEffect, useState } from "react";
import "./grow.css";
import Select from "react-select"; // Import the Select component

import bgimagecart from "./assets/images/bgimagecart.png";
import section_icon from "./assets/images/section_icon.avif";
import bghand from "./assets/images/bghand.png";
import bgimaged from "./assets/images/bgimaged.jpg";
import SVG from "./assets/images/SVG.png";
import SVGCEN from "./assets/images/SVGCEN.jpg";
import SVGL from "./assets/images/SVGL.jpg";
import blcicon from "./assets/images/blcicon.jpg";
import front from "./assets/images/front .jpg";
import Frame1 from "./assets/images/Frame1.png";
import Frame2 from "./assets/images/Frame2.png";
import Frame3 from "./assets/images/Frame3.png";
import Frame4 from "./assets/images/Frame4.png";
import Vector from "./assets/images/Vector.png";
import landdept from "./assets/images/landdept.png.jpeg";
import dubaipolice from "./assets/images/dubaipolice.png.jpeg";
import dubaihealth from "./assets/images/dubaihealth.png.jpeg";
import dubaiecomomy from "./assets/images/dubaieconomy.png.jpeg";
import dubaicourt from "./assets/images/dubaicourt.png.jpeg";
import duqe from "./assets/images/duqe.png.jpeg";
import ifza from "./assets/images/ifza.png.jpeg";
import meydon from "./assets/images/meydon.png.jpeg";
import jafna from "./assets/images/jafna.png.jpeg";
import sharjah from "./assets/images/sharjah.png.jpeg";
import dmcc from "./assets/images/dmcc.png.jpeg";
import kezad from "./assets/images/kezad.png.jpeg";
import spc from "./assets/images/spc.png.jpeg";
import AbCapital_logo from "./assets/images/AbCaiptal_logo.png";
import website from "./assets/images/website.png";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";
import linkdln from "./assets/images/linkdln.png";

export default function AbCapital() {
  const imageStyle = {
    width: "100%",
    height: "auto",
    maxWidth: "100px",
    maxHeight: "60px",
  };
  const gradientStyle = {
    background:
      "linear-gradient(149deg, #005977 12.9%, #5dbad9 29.15%, #2cb2df 41.54%, #005977 70.18%, #005977 87.21%)",
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {
    const openYourModel = () => {
      setIsFormOpen(true);
    };
    const timeoutId = setTimeout(openYourModel, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  // const pycountry = require("pycountry");
  // const countries = Array.from(pycountry.countries);
  // const countryCodes = {};
  // countries.forEach((country) => {
  //   countryCodes[country.name] = country.alpha_2;
  // });
  // const countryCodes={};
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Extracting country codes
  //      countryCodes = data.map((country) => ({
  //       name: country.name.common,
  //       alpha2Code: country.cca2,
  //       alpha3Code: country.cca3,
  //       callingCodes: country.callingCodes,
  //     }));

  // Log or use the country codes as needed
  //   console.log(countryCodes);
  // })
  // .catch((error) => console.error("Error fetching data:", error));

  const countryCodes = [
    { value: "+93", label: "Afghanistan (+93)" },
    { value: "+355", label: "Albania (+355)" },
    { value: "+213", label: "Algeria (+213)" },
    { value: "+376", label: "Andorra (+376)" },
    { value: "+244", label: "Angola (+244)" },
    { value: "+1", label: "Antigua and Barbuda (+1)" },
    { value: "+54", label: "Argentina (+54)" },
    { value: "+374", label: "Armenia (+374)" },
    { value: "+297", label: "Aruba (+297)" },
    { value: "+61", label: "Australia (+61)" },
    { value: "+43", label: "Austria (+43)" },
    { value: "+994", label: "Azerbaijan (+994)" },
    { value: "+973", label: "Bahrain (+973)" },
    { value: "+880", label: "Bangladesh (+880)" },
    { value: "+1", label: "Barbados (+1)" },
    { value: "+375", label: "Belarus (+375)" },
    { value: "+32", label: "Belgium (+32)" },
    { value: "+501", label: "Belize (+501)" },
    { value: "+229", label: "Benin (+229)" },
    { value: "+975", label: "Bhutan (+975)" },
    { value: "+591", label: "Bolivia (+591)" },
    { value: "+387", label: "Bosnia and Herzegovina (+387)" },
    { value: "+267", label: "Botswana (+267)" },
    { value: "+55", label: "Brazil (+55)" },
    { value: "+673", label: "Brunei (+673)" },
    { value: "+359", label: "Bulgaria (+359)" },
    { value: "+226", label: "Burkina Faso (+226)" },
    { value: "+257", label: "Burundi (+257)" },
    { value: "+855", label: "Cambodia (+855)" },
    { value: "+237", label: "Cameroon (+237)" },
    { value: "+238", label: "Cape Verde (+238)" },
    { value: "+236", label: "Central African Republic (+236)" },
    { value: "+235", label: "Chad (+235)" },
    { value: "+56", label: "Chile (+56)" },
    { value: "+57", label: "Colombia (+57)" },
    { value: "+269", label: "Comoros (+269)" },
    { value: "+506", label: "Costa Rica (+506)" },
    { value: "+385", label: "Croatia (+385)" },
    { value: "+53", label: "Cuba (+53)" },
    { value: "+357", label: "Cyprus (+357)" },
    { value: "+420", label: "Czech Republic (+420)" },
    { value: "+243", label: "Democratic Republic of the Congo (+243)" },
    { value: "+45", label: "Denmark (+45)" },
    { value: "+253", label: "Djibouti (+253)" },
    { value: "+1", label: "Dominica (+1)" },
    { value: "+1", label: "Dominican Republic (+1)" },
    { value: "+593", label: "Ecuador (+593)" },
    { value: "+20", label: "Egypt (+20)" },
    { value: "+503", label: "El Salvador (+503)" },
    { value: "+240", label: "Equatorial Guinea (+240)" },
    { value: "+291", label: "Eritrea (+291)" },
    { value: "+372", label: "Estonia (+372)" },
    { value: "+251", label: "Ethiopia (+251)" },
    { value: "+679", label: "Fiji (+679)" },
    { value: "+358", label: "Finland (+358)" },
    { value: "+33", label: "France (+33)" },
    { value: "+241", label: "Gabon (+241)" },
    { value: "+995", label: "Georgia (+995)" },
    { value: "+49", label: "Germany (+49)" },
    { value: "+233", label: "Ghana (+233)" },
    { value: "+30", label: "Greece (+30)" },
    { value: "+1", label: "Grenada (+1)" },
    { value: "+502", label: "Guatemala (+502)" },
    { value: "+224", label: "Guinea (+224)" },
    { value: "+245", label: "Guinea-Bissau (+245)" },
    { value: "+592", label: "Guyana (+592)" },
    { value: "+509", label: "Haiti (+509)" },
    { value: "+504", label: "Honduras (+504)" },
    { value: "+852", label: "Hong Kong (+852)" },
    { value: "+36", label: "Hungary (+36)" },
    { value: "+354", label: "Iceland (+354)" },
    { value: "+91", label: "India (+91)" },
    { value: "+62", label: "Indonesia (+62)" },
    { value: "+98", label: "Iran (+98)" },
    { value: "+964", label: "Iraq (+964)" },
    { value: "+353", label: "Ireland (+353)" },
    { value: "+972", label: "Israel (+972)" },
    { value: "+39", label: "Italy (+39)" },
    { value: "+1", label: "Jamaica (+1)" },
    { value: "+81", label: "Japan (+81)" },
    { value: "+962", label: "Jordan (+962)" },
    { value: "+7", label: "Kazakhstan (+7)" },
    { value: "+254", label: "Kenya (+254)" },
    { value: "+686", label: "Kiribati (+686)" },
    { value: "+383", label: "Kosovo (+383)" },
    { value: "+965", label: "Kuwait (+965)" },
    { value: "+996", label: "Kyrgyzstan (+996)" },
    { value: "+856", label: "Laos (+856)" },
    { value: "+371", label: "Latvia (+371)" },
    { value: "+961", label: "Lebanon (+961)" },
    { value: "+266", label: "Lesotho (+266)" },
    { value: "+231", label: "Liberia (+231)" },
    { value: "+218", label: "Libya (+218)" },
    { value: "+423", label: "Liechtenstein (+423)" },
    { value: "+370", label: "Lithuania (+370)" },
    { value: "+352", label: "Luxembourg (+352)" },
    { value: "+853", label: "Macau (+853)" },
    { value: "+389", label: "North Macedonia (+389)" },
    { value: "+261", label: "Madagascar (+261)" },
    { value: "+265", label: "Malawi (+265)" },
    { value: "+60", label: "Malaysia (+60)" },
    { value: "+960", label: "Maldives (+960)" },
    { value: "+223", label: "Mali (+223)" },
    { value: "+356", label: "Malta (+356)" },
    { value: "+692", label: "Marshall Islands (+692)" },
    { value: "+222", label: "Mauritania (+222)" },
    { value: "+230", label: "Mauritius (+230)" },
    { value: "+262", label: "Mayotte (+262)" },
    { value: "+52", label: "Mexico (+52)" },
    { value: "+691", label: "Micronesia (+691)" },
    { value: "+373", label: "Moldova (+373)" },
    { value: "+377", label: "Monaco (+377)" },
    { value: "+976", label: "Mongolia (+976)" },
    { value: "+382", label: "Montenegro (+382)" },
    { value: "+212", label: "Morocco (+212)" },
    { value: "+258", label: "Mozambique (+258)" },
    { value: "+95", label: "Myanmar (+95)" },
    { value: "+264", label: "Namibia (+264)" },
    { value: "+674", label: "Nauru (+674)" },
    { value: "+977", label: "Nepal (+977)" },
    { value: "+31", label: "Netherlands (+31)" },
    { value: "+599", label: "Netherlands Antilles (+599)" },
    { value: "+64", label: "New Zealand (+64)" },
    { value: "+505", label: "Nicaragua (+505)" },
    { value: "+227", label: "Niger (+227)" },
    { value: "+234", label: "Nigeria (+234)" },
    { value: "+850", label: "North Korea (+850)" },
    { value: "+1", label: "Northern Mariana Islands (+1)" },
    { value: "+47", label: "Norway (+47)" },
    { value: "+968", label: "Oman (+968)" },
    { value: "+92", label: "Pakistan (+92)" },
    { value: "+680", label: "Palau (+680)" },
    { value: "+507", label: "Panama (+507)" },
    { value: "+675", label: "Papua New Guinea (+675)" },
    { value: "+595", label: "Paraguay (+595)" },
    { value: "+51", label: "Peru (+51)" },
    { value: "+63", label: "Philippines (+63)" },
    { value: "+48", label: "Poland (+48)" },
    { value: "+351", label: "Portugal (+351)" },
    { value: "+1", label: "Puerto Rico (+1)" },
    { value: "+974", label: "Qatar (+974)" },
    { value: "+242", label: "Republic of the Congo (+242)" },
    { value: "+262", label: "Réunion (+262)" },
    { value: "+40", label: "Romania (+40)" },
    { value: "+7", label: "Russia (+7)" },
    { value: "+250", label: "Rwanda (+250)" },
    { value: "+590", label: "Saint Barthélemy (+590)" },
    { value: "+290", label: "Saint Helena (+290)" },
    { value: "+1", label: "Saint Kitts and Nevis (+1)" },
    { value: "+1", label: "Saint Lucia (+1)" },
    { value: "+590", label: "Saint Martin (+590)" },
    { value: "+508", label: "Saint Pierre and Miquelon (+508)" },
    { value: "+1", label: "Saint Vincent and the Grenadines (+1)" },
    { value: "+685", label: "Samoa (+685)" },
    { value: "+378", label: "San Marino (+378)" },
    { value: "+239", label: "São Tomé and Príncipe (+239)" },
    { value: "+966", label: "Saudi Arabia (+966)" },
    { value: "+221", label: "Senegal (+221)" },
    { value: "+381", label: "Serbia (+381)" },
    { value: "+248", label: "Seychelles (+248)" },
    { value: "+232", label: "Sierra Leone (+232)" },
    { value: "+65", label: "Singapore (+65)" },
    { value: "+421", label: "Slovakia (+421)" },
    { value: "+386", label: "Slovenia (+386)" },
    { value: "+677", label: "Solomon Islands (+677)" },
    { value: "+252", label: "Somalia (+252)" },
    { value: "+27", label: "South Africa (+27)" },
    { value: "+82", label: "South Korea (+82)" },
    { value: "+34", label: "Spain (+34)" },
    { value: "+94", label: "Sri Lanka (+94)" },
    { value: "+1", label: "Sudan (+1)" },
    { value: "+597", label: "Suriname (+597)" },
    { value: "+268", label: "Swaziland (+268)" },
    { value: "+46", label: "Sweden (+46)" },
    { value: "+41", label: "Switzerland (+41)" },
    { value: "+963", label: "Syria (+963)" },
    { value: "+886", label: "Taiwan (+886)" },
    { value: "+992", label: "Tajikistan (+992)" },
    { value: "+255", label: "Tanzania (+255)" },
    { value: "+66", label: "Thailand (+66)" },
  ];

  return (
    <>
      <div>
        <div>
          {isFormOpen ? (
            <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[99] bg-[#005977]/75 px-[6%]">
              <form className="space-y-8 w-full md:w-2/3 lg:w-1/2 xl:w-[30%] bg-black py-10 px-5 rounded-lg shadow-xl text-sm relative">
                <div className="flex flex-col gap-6 relative">
                  <span
                    className="absolute -top-7 -right-3 text-white border-2 rounded-full p-1 cursor-pointer"
                    onClick={closeForm}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </span>
                  <div className="flex flex-col gap-4 items-center">
                    <img
                      src={AbCapital_logo}
                      alt=""
                      className="object-contain h-[50px]"
                    />
                    <h2 className="text-xl md:text-2xl font-semibold text-white text-center uppercase lg:px-5">
                      We offer licences that support your business in UAE
                    </h2>
                  </div>
                  <input
                    required=""
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="focus-visible:ring-[#005977] text-[#005977] p-2 rounded-md outline-[#005977]"
                    value=""
                  />
                  <div
                    style={{ borderRadius: "5px" }}
                    className="flex flex-col  gap-3 w-fullrounded-md  "
                  >
                    <div className="css-b62m3t-container rounded-md">
                      <div className="css-b62m3t-container rounded-md bg-white">
                        <Select
                          id="countryCode"
                          name="countryCode"
                          options={countryCodes}
                          onChange={handleCountryChange}
                          value={selectedCountry}
                          isSearchable
                          className="rounded-md"
                          placeholder="Select Country Code"
                          style={{ borderRadius: "2px" }}
                        />
                      </div>
                    </div>
                    <input
                      required=""
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      className="outline-[#005977] text-[#005977] p-2 mt-3 rounded-md w-full"
                      value=""
                    />
                  </div>
                  <input
                    required=""
                    type="text"
                    name="Email"
                    placeholder="email"
                    className="outline-[#005977] text-[#005977] p-2 rounded-md"
                    value=""
                  />
                  <button
                    type="submit"
                    className="bg-white text-lg text-[#005577] font-medium w-full py-[10px] rounded-md flex gap-2 disabled:bg-gray-400 justify-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Render other content or a loading message
            <p>Loading...</p>
          )}
        </div>

        <div>
          <header>
            <nav class="bg-black bg-opacity-90 backdrop-blur-md border-gray-200 absolute top-0 left-0 z-50 w-full h-fit py-2">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <div class="md:h-12 w-fit h-10 relative">
                  <img
                    src={AbCapital_logo}
                    alt="Logo"
                    class="h-full w-full object-contain"
                  ></img>
                </div>
                <div>
                  <div class="px-5 md:px-10 py-2 md:py-3 rounded-lg bg-[#005977] text-white text-sm md:text-base">
                    Get Free Consultation
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <section className="min-h-screen md:h-fit w-full relative bg-my-background-image bg-cover lg:px-[5%] xl:px-0">
          <div className="bg-[#005977] bg-opacity-[0.55] absolute top-0 left-0 h-full w-full z-0"></div>
          <div className="min-h-screen w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-16 sm:gap-0 pt-[30%] md:pt-0 pb-10 md:pb-0 mx-auto">
            <div className="w-[90%] sm:w-[65%] lg:w-3/4 relative z-10 md:relative flex flex-col gap-6 justify-center h-full">
              <div className="w-2/3 sm:w-full lg:w-2/3 xl:w-1/2 mx-auto sm:mx-0">
                <h1 className="text-white text-[28px] sm:text-3xl md:text-[56px] font-medium sm:font-semibold lg:font-bold text-center sm:text-start heading leading-[32px] sm:leading-[56px] lg:leading-[72px]">
                  Crafting Your Business Success Story in the UAE?
                </h1>
              </div>
              <p className="text-white text-base sm:text-xl sm:text-start sub-heading text-center lg:w-[55%]">
                Fueling Your Business Growth with AB CAPITAL SERVICES Unlock
                opportunities, navigate challenges, and thrive with our
                strategic financial solutions.
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <a href="#costcalci">
                  <button className="px-4 h-12 btn-cost-calculator button-bg cursor-pointer rounded-3xl shadow-[0px_5px_0px_1px_lightblue] group transition duration-300 ease-in-out">
                    <span className="font-medium text-white group-hover:text-white flex gap-12">
                      Cost Calculator{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-move-right"
                      >
                        <path d="M18 8L22 12L18 16"></path>
                        <path d="M2 12H22"></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div
              className="relative z-10 sm:mt-10 rounded-md px-[10%] sm:px-[10%] md:px-0 w-full sm:w-[30%] lg:w-[26%] xl:w-[27%]"
              id="form"
            >
              <div>
                <form className="space-y-8 w-full bg-[#005977]/60 py-10 px-5 rounded-lg shadow-xl text-sm">
                  <div className="flex flex-col gap-5">
                    <div>
                      <h2 className="text-3xl sm:text-[33px] xl:text-4xl font-bold text-white text-center">
                        Get Free <br /> Consultation
                      </h2>
                    </div>
                    <input
                      required
                      type="text"
                      name="Name"
                      placeholder="Name"
                      className="focus-visible:ring-[#005977] text-[#005977] p-2 rounded-md outline-[#005977]"
                      value=""
                    />
                    <div className="css-b62m3t-container rounded-md">
                      <div className="css-b62m3t-container rounded-md bg-white">
                        <Select
                          id="countryCode"
                          name="countryCode"
                          options={countryCodes}
                          onChange={handleCountryChange}
                          value={selectedCountry}
                          isSearchable
                          className="rounded-md"
                          placeholder="Select Country Code"
                          style={{ borderRadius: "2px" }}
                        />
                      </div>
                    </div>
                    <input
                      required
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      className="outline-[#005977] text-[#005977] p-2 rounded-md w-full"
                      value=""
                    />
                    <input
                      required
                      type="text"
                      name="Email"
                      placeholder="Email"
                      className="outline-[#005977] text-[#005977] p-2 rounded-md"
                      value=""
                    />
                    <button
                      type="submit"
                      className="bg-white text-lg text-[#005577] font-medium w-full py-[10px] rounded-md flex gap-2 disabled:bg-gray-400 justify-center"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] sm:w-[80%] mx-auto my-20 flex flex-col gap-4">
          <h2 className="text-[#005977] uppercase font-semibold sm:text-3xl text-xl text-center heading">
            Company Formation in the UAE
          </h2>
          <p className="text-gray-700 text-center text-sm sm:text-base sub-heading flex flex-col gap-2">
            <span className="font-bold">
              Are you looking to establish your business in the dynamic and
              thriving business landscape of the United Arab Emirates?
            </span>
            At AB CAPITAL SERVICES, we specialize in assisting entrepreneurs and
            investors like you in setting up your company with ease. In this
            guide, we'll explore three key options for company formation:
            Mainland and Freezone businesses, highlighting their differences and
            the unique benefits they offer.
          </p>
          <div className="w-full flex justify-evenly flex-wrap mt-6 gap-4">
            <div className="min-w-[280px] max-w-[300px] flex flex-col items-center gap-4 relative border rounded-lg p-6 overflow-hidden group card select-none z-0">
              <img
                src={bgimaged}
                alt=""
                className="h-full w-full absolute top-0 left-0 object-cover block"
              />
              <div className="h-full w-full absolute hover:top-0 hover:left-0 hover:bg-[#005977]/80 hover:z-0 block"></div>
              <div className="bg-white rounded-full p-3 w-14 h-14 relative z-10">
                <img
                  src={SVG}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-black/80 text-center font-semibold heading relative z-10 group-hover:card:text-white">
                Mainland Company Formation
              </h3>
              <p className="text-black/80 text-sm text-center sub-heading relative z-10 group-hover:card:text-white">
                Mainland company formation in the UAE refers to establishing
                your business within the jurisdiction governed by the respective
                Emirates' Department of Economic Development (DED). These
                companies are also known as onshore companies.
              </p>
              <div className="flex gap-2 items-center justify-center text-[#005977] sub-heading bg-white rounded-lg w-full py-3 relative z-10 group-hover:card:font-semibold cursor-pointer">
                Get Free Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="w-72 flex flex-col items-center gap-4 border rounded-lg p-6 relative z-10 overflow-hidden select-none">
              <img
                src={bgimaged}
                alt=""
                className="h-full w-full absolute top-0 left-0 object-cover block"
              />
              <div className="h-full w-full absolute hover:top-0 hover:left-0 hover:bg-[#005977]/80 hover:z-0 block"></div>
              <div className="bg-white rounded-full p-3 w-14 h-14 relative z-10">
                <img
                  src={SVGCEN}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-center font-semibold heading relative z-10 text-white">
                Free Zone Company Formation
              </h3>
              <p className="text-sm text-center sub-heading relative z-10 text-white">
                Freezone company formation, on the other hand, involves setting
                up your business within designated free trade zones across the
                UAE. Each free zone is designed to cater to specific industries
                and business types.
              </p>
              <div className="flex gap-2 items-center justify-center text-[#005977] sub-heading bg-white rounded-lg w-full py-3 relative z-10 font-semibold cursor-pointer">
                Get Free Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>

            {/* Offshore Company Formation */}
            <div className="w-72 flex flex-col items-center gap-4 border rounded-lg p-6 relative z-10 overflow-hidden select-none">
              <img
                src={bgimaged}
                alt=""
                className="h-full w-full absolute top-0 left-0 object-cover block"
              />
              <div className="h-full w-full absolute hover:top-0 hover:left-0 hover:bg-[#005977]/80 hover:z-0 block"></div>
              <div className="bg-white rounded-full p-3 w-14 h-14 relative z-10">
                <img
                  src={SVGL}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-center font-semibold heading relative z-10 text-white">
                Offshore Company Formation
              </h3>
              <p className="text-black/80 text-sm text-center sub-heading relative z-10 group-hover:card:text-white">
                Offshore company formation in the UAE is easy and strategic,
                ensuring a smooth setup for international business expansion. AB
                Capital, with its expertise and support, facilitates the
                seamless creation of offshore companies in the UAE.
              </p>
              <div className="flex gap-2 items-center justify-center text-[#005977] sub-heading bg-white rounded-lg w-full py-3 relative z-10 font-semibold cursor-pointer">
                Get Free Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/*    /////// */}

        <div className="pro-image bg-teal-700 mt-20 p-6 lg:p-12 bg-[#005977]/80 h-full w-full relative top-0 left-0 bg-[#005977]/80 z-0 ">
          <p className="text-white uppercase font-semibold sm:text-3xl text-xl text-center heading">
            BUSINESS STRUCTURED - OPENING COMPANY IN DUBAI
          </p>

          <p className="mt-4 lg:mt-8 font-inter text-base font-normal text-bold leading-6 text-center text-white">
            <span style={{ display: "block" }}>
              Dubai Business Setup: Choose the Right Structure, Optimize
              Ownership, and
            </span>
            <span> Navigate Regulations with Expert Guidance for Success.</span>
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-14 py-5">
            <div className="p-2 sm:p-5 bg-white rounded-md relative group overflow-hidden">
              <div className="flex flex-col gap-2 items-center relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-9 sm:h-9 w-6 h-6 text-[#005977] group-hover:text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="font-bold text-gray-900 text-[10px] sm:text-base text-center group-hover:text-white">
                  Limited Liability Company (LLC)
                </h3>
              </div>
              <img
                src={bgimagecart}
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 z-0 hidden group-hover:block"
              />
              <div className="h-full w-full bg-[#005977]/70 absolute top-0 left-0 z-0 hidden group-hover:block"></div>
            </div>
            <div className="p-2 sm:p-5 bg-white rounded-md relative group overflow-hidden">
              <div className="flex flex-col gap-2 items-center relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-9 sm:h-9 w-6 h-6 text-[#005977] group-hover:text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="font-bold text-gray-900 text-[10px] sm:text-base text-center group-hover:text-white">
                  Free Zone Companies
                </h3>
              </div>
              <img
                src={bgimagecart}
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 z-0 hidden group-hover:block"
              />
              <div className="h-full w-full bg-[#005977]/70 absolute top-0 left-0 z-0 hidden group-hover:block"></div>
            </div>
            <div className="p-2 sm:p-5 bg-white rounded-md relative group overflow-hidden">
              <div className="flex flex-col gap-2 items-center relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-9 sm:h-9 w-6 h-6 text-[#005977] group-hover:text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="font-bold text-gray-900 text-[10px] sm:text-base text-center group-hover:text-white">
                  UAE Joint Stock Company
                </h3>
              </div>
              <img
                src={bgimagecart}
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 z-0 hidden group-hover:block"
              />
              <div className="h-full w-full bg-[#005977]/70 absolute top-0 left-0 z-0 hidden group-hover:block"></div>
            </div>
            <div className="p-2 sm:p-5 bg-white rounded-md relative group overflow-hidden">
              <div className="flex flex-col gap-2 items-center relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-9 sm:h-9 w-6 h-6 text-[#005977] group-hover:text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="font-bold text-gray-900 text-[10px] sm:text-base text-center group-hover:text-white">
                  Trade Representative Office
                </h3>
              </div>
              <img
                src={bgimagecart}
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 z-0 hidden group-hover:block"
              />
              <div className="h-full w-full bg-[#005977]/70 absolute top-0 left-0 z-0 hidden group-hover:block"></div>
            </div>
            <div className="p-2 sm:p-5 bg-white rounded-md relative group overflow-hidden">
              <div className="flex flex-col gap-2 items-center relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-9 sm:h-9 w-6 h-6 text-[#005977] group-hover:text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="font-bold text-gray-900 text-[10px] sm:text-base text-center group-hover:text-white">
                  Dual License Branch Office
                </h3>
              </div>
              <img
                src={bgimagecart}
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 z-0 hidden group-hover:block"
              />
              <div className="h-full w-full bg-[#005977]/70 absolute top-0 left-0 z-0 hidden group-hover:block"></div>
            </div>
            <div className="p-2 sm:p-5 bg-white rounded-md relative group overflow-hidden">
              <div className="flex flex-col gap-2 items-center relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-9 sm:h-9 w-6 h-6 text-[#005977] group-hover:text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="font-bold text-gray-900 text-[10px] sm:text-base text-center group-hover:text-white">
                  Extension Branch Office
                </h3>
              </div>
              <img
                src={bgimagecart}
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 z-0 hidden group-hover:block"
              />
              <div className="h-full w-full bg-[#005977]/70 absolute top-0 left-0 z-0 hidden group-hover:block"></div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <di class="w-[90%] sm:w-[80%] mx-auto my-20  mt-24 lg:block">
            <div class=" flex flex-col items-center gap-6">
              <h2 class="text-[#005977] uppercase font-semibold sm:text-[32px] text-xl text-center heading">
                BUSINESS LICENSES FOR COMPANY FORMATION
              </h2>
              <p class="text-gray-700 text-center text-sm sm:text-base sub-heading lg:w-1/2">
                company formation, obtaining the necessary business licenses is
                a crucial step to ensure legal compliance.{" "}
              </p>
              <div class="w-full md:flex gap-8 items-center">
                <div class="w- h-fit flex flex-col gap-4 sm:gap-2 bg-[#005977] bg-opacity-[0.06] p-5 rounded-md items-center hover:bg-opacity-[0.2] transition-all ease-in duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={gradientStyle}
                    class="text-white lg:w-14 lg:h-14 xl:h-16 xl:w-16 sm:w-12 sm:h-12 w-10 h-10 bg-linear px-3 rounded-full"
                  >
                    <circle cx="6" cy="13" r="3"></circle>
                    <path d="m9.7 14.4-.9-.3"></path>
                    <path d="m3.2 11.9-.9-.3"></path>
                    <path d="m4.6 16.7.3-.9"></path>
                    <path d="m7.6 16.7-.4-1"></path>
                    <path d="m4.8 10.3-.4-1"></path>
                    <path d="m2.3 14.6 1-.4"></path>
                    <path d="m8.7 11.8 1-.4"></path>
                    <path d="m7.4 9.3-.3.9"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"></path>
                  </svg>

                  <h3 class="text-gray-900 font-semibold sm:text-xl text-lg text-center">
                    Professional License
                  </h3>
                  <p class="text-gray-700 text-sm text-center">
                    This license authorizes professionals to operate within
                    their specialized fields. Typically renewed annually, the
                    Professional License is a key requirement for ensuring legal
                    compliance and conducting business activities in the United
                    Arab Emirates.
                  </p>
                </div>
                <div class="lg:w-[210%] xl:w-[120%] mt-5 flex flex-col gap-4 sm:gap-2 bg-[#005977] bg-opacity-[0.06] p-5 rounded-md items-center hover:bg-opacity-[0.2] transition-all ease-in duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={gradientStyle}
                    class="text-white lg:w-14 lg:h-14 xl:h-16 xl:w-16 w-10 h-10 bg-linear px-3 rounded-full"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                  <h3 class="text-gray-900 font-semibold sm:text-xl text-lg text-center">
                    Commercial License
                  </h3>
                  <p class="text-gray-700 text-sm text-center">
                    The Commercial License offered by ABCapital.ae is a vital
                    authorization for businesses engaged in trading activities.
                    Tailored to meet the specific needs of our clients, this
                    license allows for the legal operation of commercial
                    ventures, ensuring compliance with regulations set by the
                    Department of Economic Development (DED) for mainland
                    businesses or the respective Free Zone Authority for Free
                    Zone companies.
                  </p>
                </div>
                <div class="w- h-fit flex flex-col gap-4 mt-5 sm:gap-2 bg-[#005977] bg-opacity-[0.06] p-5 rounded-md items-center hover:bg-opacity-[0.2] transition-all ease-in duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={gradientStyle}
                    class="text-white lg:w-14 lg:h-14 xl:h-16 xl:w-16 w-10 h-10 bg-linear px-3 rounded-full"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M17 18h1"></path>
                    <path d="M12 18h1"></path>
                    <path d="M7 18h1"></path>
                  </svg>
                  <h3 class="text-gray-900 font-semibold sm:text-xl text-lg text-center">
                    Industrial License
                  </h3>
                  <p class="text-gray-700 text-sm text-center">
                    The Industrial License from AbCapital.ae is your gateway to
                    conducting manufacturing and industrial activities in the
                    UAE. This license ensures regulatory compliance set by DED
                    for mainland operations or the respective Free Zone
                    Authority for Free Zone entities.
                  </p>
                </div>
              </div>
            </div>
          </di>
        </div>
        <div>
          <div className="flex">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-[626px] h-[463px] md:h-[500px] top-[25px] left-[0.5px] md:left-[53px] rounded-[4.64px] flex items-center justify-center overflow-hidden shadow-lg bg-blue-100">
                <img
                  src={front}
                  alt="Overlay"
                  className="absolute top-0 w-full md:w-[575px] h-[440px] md:h-[460px] opacity-15 rounded-[4.64px]"
                  style={{ zIndex: 1, top: "50px", marginLeft: "4px" }}
                />
              </div>

              <div className="flex flex-col ml-5 mt-10 md:ml-[7rem]">
                <p className="text-[#005977] uppercase font-semibold sm:text-[32px] text-xl text-center lg:leading-[49px]">
                  WE HELP YOU IN STEP BY STEP
                  <br /> BUSINESS SETUP PROCESS
                </p>

                <p className="my-text">
                  <span>Enjoy 100% foreign ownership in UAE!</span>
                  <br />
                </p>

                <div className="flex flex-wrap mt-2 md:mt-4 ">
                  <div className="m-5">
                    <div className="p-1 mt-5 w-full md:w-[207.28px] h-[40px]">
                      <img src={Frame1} alt="" />
                    </div>

                    <div className="p-1 mt-5  w-full md:w-[207.28px] h-[40px]">
                      <img src={Frame4} alt="" />
                    </div>
                  </div>

                  <div className="m-5 ">
                    <div className="p-1 mt-5 w-full md:w-[207.28px] h-[40px]">
                      <img src={Frame3} alt="" />
                    </div>

                    <div className="p-1  mt-5 w-full md:w-[207.28px] h-[40px]">
                      <img src={Frame2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section start */}

        <section className="mt-10 mb-10">
          <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col gap-5 items-center">
            <div className="flex gap-5 items-center flex-col">
              <div className="sm:w-1/2 flex flex-col gap-4 items-center">
                <h2 className="text-[#005577] uppercase font-semibold sm:text-[32px] text-2xl text-center heading leading-[36px] w-4/5 sm:w-full">
                  Working with Government Agency
                </h2>
                <p className="text-[#005577] text-center text-base underline leading-[24px] heading">
                  for a Better Future
                </p>
              </div>
              <div className="sm:w-2/3 lg:w-4/5">
                <p className="text-sm text-[#374151] text-center w-full hidden lg:block sub-heading">
                  Our association with ministers and government entities
                  throughout the UAE enables us to secure swift government
                  approvals for our clients. Our consultants collaborate closely
                  with the Department of Economic Development and various other
                  governmental bodies in the UAE to facilitate seamless and
                  prompt company formation.
                </p>
                <p className="text-sm text-[#374151] text-center w-full lg:hidden sub-heading">
                  Our association with ministers and government entities
                  throughout the UAE enables us to secure swift government
                  approvals for our clients.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-center w-full flex-wrap">
              <img
                src={landdept}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
              <img
                src={dubaipolice}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
              <img
                src={dubaihealth}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-20 sm:mt-0"
              />
              <img
                src={dubaiecomomy}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-20 sm:mt-0"
              />
              <img
                src={dubaicourt}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-10 sm:mt-0"
              />
              <img
                src={duqe}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-5 sm:mt-0"
              />
              <img
                src={ifza}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-10 sm:mt-0"
              />
              <img
                src={jafna}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-5 sm:mt-0"
              />
              <img
                src={meydon}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
              <img
                src={sharjah}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
              <img
                src={dmcc}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
              <img
                src={kezad}
                alt="logo"
                className="h-[150px] w-[150px] object-contain"
              />
              <img
                src={spc}
                alt="logo"
                className="h-[150px] w-[150px] object-contain -mt-20 sm:mt-0"
              />
            </div>
            <div className="flex sm:gap-24 gap-12 flex-col sm:flex-row">
              <div className="p-6 rounded-md overflow-hidden relative">
                <div className="flex flex-col gap-5 relative text-white z-10">
                  <div className="flex flex-col items-center gap-4 pb-5 border-b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-white sm:w-12 sm:h-12 w-10 h-10"
                    >
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    <h3 className="font-semibold text-lg heading">Benefits</h3>
                    <p className="text-lg text-center sm:text-right sub-heading">
                      setting up of businesses in UAE
                    </p>
                  </div>
                  <div className="gap-10 flex flex-col justify-between px-6">
                    <ul className="max-w-md space-y-1 list-disc list-inside heading">
                      <li>Tax Advantages</li>
                      <li>Foreign Ownership</li>
                      <li>World-Class Infrastructure</li>
                      <li>Efficient Regulations</li>
                      <li>Global Trade and Connectivity</li>
                      <li>Strong Legal Framework</li>
                      <li>Strategic Free Zones</li>
                      <li>Residency Options</li>
                      <li>Diverse Business Opportunities</li>
                    </ul>
                    <div>
                      <button className="bg-white w-full py-2 rounded-md text-[#005577] font-bold">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#005577]/80 absolute top-0 left-0 z-[5] h-full w-full"></div>
                <img
                  src={section_icon}
                  alt=""
                  className="h-full w-full object-cover absolute top-0 left-0"
                />
              </div>
              <div className="p-6 rounded-md overflow-hidden relative">
                <div className="flex flex-col gap-5 relative text-white z-10">
                  <div className="flex flex-col gap-4 items-center pb-5 border-b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="sm:w-12 sm:h-12 w-10 h-10"
                    >
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    <h3 className="font-semibold text-lg heading">
                      Why AB Capital?
                    </h3>
                    <p className="text-lg text-center sm:text-right sub-heading">
                      setting up of businesses in UAE
                    </p>
                  </div>
                  <div className="gap-10 flex flex-col px-6">
                    <ul className="max-w-md space-y-1 list-disc list-inside heading">
                      <li>Transparent Processes</li>
                      <li>Expert Guidance</li>
                      <li>Low operations</li>
                      <li>Tax benefits</li>
                      <li>No foreign exchange control</li>
                      <li>Time and Cost Efficiency</li>
                      <li>Customer-Centric Approach</li>
                      <li>Clear Communication</li>
                      <li>Focus on Results</li>
                    </ul>
                    <div>
                      <button className="bg-white w-full py-2 rounded-md text-[#005577] font-bold">
                        Get Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#005577]/80 absolute top-0 left-0 z-[5] h-full w-full"></div>
                <img
                  src={section_icon}
                  alt=""
                  className="h-full w-full object-cover absolute top-0 left-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* section end  */}

        <section class=" bg-gray-100 mt-20 py-10 relative">
          <div class="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto  flex flex-col gap-4 relative z-10 text-white">
            <p class="text-center text-lg sm:text-xl font-medium footer-text flex flex-col gap-4">
              <span class="font-bold">
                Ready to take the next step in establishing your business in the
                UAE?
              </span>{" "}
              Contact us today to discuss your company formation needs, and let
              us assist you in making your entrepreneurial dreams a reality.
            </p>
          </div>
          <div class="bg-[#005577]/80  absolute top-0 left-0 z-[5] h-full w-full"></div>
          <img
            src={bghand}
            alt=""
            className="h-full w-full object-cover absolute top-0 left-0"
          />
        </section>

        <section class="my-6">
          <div class="p-4 mx-auto lg:w-1/2">
            <div>
              <form class="flex flex-col gap-8 w-full py-10 border rounded-lg overflow-hidden text-sm lg:text-base text-white relative">
                <div class="bg-[#005577]/80 absolute top-0 left-0 z-[5] h-full w-full"></div>
                <img
                  src={bgimaged}
                  alt=""
                  class="h-full w-full object-cover absolute top-0 left-0"
                />
                <h2 class="text-white text-2xl font-semibold md:text-5xl heading relative z-10 uppercase text-center">
                  get free quote now!
                </h2>
                <div
                  class="flex transition-all duration-300 ease-in-out gap-5 px-5 w-full relative z-10"
                  style={{ transform: " translateX(0%)" }}
                >
                  <div class="grow-0 shrink-0 w-full flex justify-around flex-col mt-5">
                    <div>
                      <label for="">Choose your business activity</label>
                      <select
                        required=""
                        name="bussinessActivity"
                        tabindex="-1"
                        class="w-full outline-[#005977] text-[#005977] p-2 rounded-md"
                      >
                        <option value="" disabled="">
                          Select an activity
                        </option>
                        <option value="Acounting &amp; Auditing">
                          Acounting &amp; Auditing
                        </option>
                        <option value="Advertising">Advertising</option>
                        <option value="Automobile Trading">
                          Automobile Trading
                        </option>
                        <option value="Aviation Consultancy">
                          Aviation Consultancy
                        </option>
                        <option value="Buisness Consultancy">
                          Buisness Consultancy
                        </option>
                        <option value="Cleaning Services">
                          Cleaning Services
                        </option>
                        <option value="Creative Arts &amp; Entertainment Activities">
                          Creative Arts &amp; Entertainment Activities
                        </option>
                        <option value="Delivery Services">
                          Delivery Services
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Educational Support Activities">
                          Educational Support Activities
                        </option>
                        <option value="Engineering Consultancy">
                          Engineering Consultancy
                        </option>
                        <option value="Event Management">
                          Event Management
                        </option>
                        <option value="Food Trading">Food Trading</option>
                        <option value="General Trading">General Trading</option>
                        <option value="Holding Company">Holding Company</option>
                        <option value="Hospitality Management">
                          Hospitality Management
                        </option>
                        <option value="HR Consultancy">HR Consultancy</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Investment Consultancy">
                          Investment Consultancy
                        </option>
                        <option value="IT Consultancy">IT Consultancy</option>
                        <option value="IT Trading">IT Trading</option>
                        <option value="Jwellery Trading">
                          Jwellery Trading
                        </option>
                        <option value="Legal Consultancy">
                          Legal Consultancy
                        </option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Management Consultancy">
                          Management Consultancy
                        </option>
                        <option value="Media">Media</option>
                        <option value="Perfumes &amp; Cosmetics Trading">
                          Perfumes &amp; Cosmetics Trading
                        </option>
                        <option value="Photography">Photography</option>
                        <option value="PR">PR</option>
                        <option value="Project Management">
                          Project Management
                        </option>
                        <option value="Raw Materials Trading">
                          Raw Materials Trading
                        </option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Restaurant, Cafe, Cloud Kitchen">
                          Restaurant, Cafe, Cloud Kitchen
                        </option>
                        <option value="Retail Outlet/Shop">
                          Retail Outlet/Shop
                        </option>
                        <option value="Salon">Salon</option>
                        <option value="Software Publishing">
                          Software Publishing
                        </option>
                        <option value="Sports Management">
                          Sports Management
                        </option>
                        <option value="Technical Consultancy">
                          Technical Consultancy
                        </option>
                        <option value="Technical Services">
                          Technical Services
                        </option>
                        <option value="Textile Trading">Textile Trading</option>
                        <option value="Tourism &amp; Recreation">
                          Tourism &amp; Recreation
                        </option>
                        <option value="Videography">Videography</option>
                      </select>
                    </div>
                    <div className="mt-10">
                      <label for="">
                        What type of premises would you require
                      </label>
                      <select
                        required=""
                        name="premisesRequired"
                        tabindex="-1"
                        class="w-full outline-[#005977] text-[#005977] p-2 rounded-md"
                      >
                        <option value="" disabled="">
                          Select premises
                        </option>
                        <option value="Virtual Office" class="">
                          Virtual Office
                        </option>
                        <option value="Warehouse" class="">
                          Warehouse
                        </option>
                        <option value="Buisness Centre" class="">
                          Buisness Centre
                        </option>
                        <option value="Physical Office" class="">
                          Physical Office
                        </option>
                        <option value="Shop Front" class="">
                          Shop Front
                        </option>
                      </select>
                    </div>
                    <div class="flex flex-col mt-10">
                      <label for="">
                        Number of Owners (only numbers are allowed*)
                      </label>
                      <input
                        required=""
                        type="number"
                        name="numberOfOwners"
                        tabindex="-1"
                        class="outline-[#005977] text-[#005977] p-2 rounded-md"
                      />
                    </div>

                    <div class="flex flex-col mt-10">
                      <label for="">
                        Number of Visas (only numbers are allowed*)
                      </label>
                      <input
                        required=""
                        type="number"
                        name="numberOfOwners"
                        tabindex="-1"
                        class="outline-[#005977] text-[#005977] p-2 rounded-md"
                      />
                    </div>

                    {/* <!-- Add other input fields here --> */}
                    <div class="bg-white w-full py-2 rounded-md text-center text-[#005577] text-lg font-semibold cursor-pointer select-none mt-10">
                      Next
                    </div>
                  </div>
                  <div class="flex flex-col gap-5 w-full grow-0 shrink-0 ml-5 mt-5">
                    {/* <!-- Add other input fields here --> */}
                    <div class="border-2 border-black hover:bg-[#9B999A] hover:text-gray-800 w-full py-2 rounded-md text-center text-black font-semibold cursor-pointer select-none">
                      previous
                    </div>
                    <button
                      tabindex="-1"
                      type="submit"
                      class=" bg-white text-[#005577] text-lg w-full py-2 rounded-md flex gap-2 disabled:bg-gray-400 justify-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* footer  */}
        <footer class="h-full w-full bg-black px-[5%] pt-8 pb-16 mt-8">
          <div class="h-full w-full max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-8">
            <div class="order-1">
              <img
                src={AbCapital_logo}
                alt=""
                class="h-[60px] sm:h-[100px] lg:h-full w-full object-contain"
              />
            </div>
            <div class="flex flex-col gap-2 items-center justify-center order-3 sm:order-2">
              <a
                href="tel:+971523655193"
                class="flex gap-2 items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="fill-[#005577]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="text-white">+971-523655193</span>
              </a>
              <a
                href="tel:+971585857119"
                class="flex gap-2 items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="fill-[#005577]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="text-white">+971-585857119</span>
              </a>
            </div>
            <div class="flex flex-col gap-2 items-center justify-center order-4 lg:order-3">
              <a
                href="mailto:info@abcapital.ae"
                class="flex gap-2 items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="fill-[#005577]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span class="text-white">info@abcapital.ae</span>
              </a>
            </div>
            <div class="w-full h-full order-5 lg:order-4">
              <p class="text-white sm:text-[19px] font-medium heading text-center lg:text-start w-[90%] sm:w-full mx-auto">
                Office No 404, Al Tawhidi Building, Bank Street, Bur Dubai, UAE
              </p>
            </div>
            <div class="flex gap-4 justify-center items-center order-2 sm:order-3 lg:order-5">
              <a href="" class=" w-fit ">
                <span class="">
                  <img src={instagram} alt="" />
                </span>
              </a>
              <a href="" class=" w-fit ">
                <span class="">
                  <img src={facebook} alt="" />
                </span>
              </a>
              <a href="" class=" w-fit ">
                <span class="">
                  <img src={linkdln} alt="" />
                </span>
              </a>
            </div>
          </div>
        </footer>

        {/* //////// */}
      </div>
    </>
  );
}
