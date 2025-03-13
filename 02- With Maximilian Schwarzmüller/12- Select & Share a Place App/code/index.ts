import axios from "axios";

const $ = document;

const form = $.querySelector("form")! as HTMLFormElement;
const addressInput = $.querySelector("#address")! as HTMLInputElement;

const GOOGLE_API_KEY = "";
const URL = "BASE_URL";

type GeoResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULT";
};

declare let google: any;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const address = addressInput.value;
  axios
    .get<GeoResponse>(`${URL}?address=${encodeURI(address)}${GOOGLE_API_KEY}`)
    .then((response) => {
      if (response.data.status !== "OK")
        throw new Error("Could not fetch location");
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map($.querySelector("#map"), {
        center: coordinates,
        zoom: 8,
      });
      new google.maps.Marker({ position: coordinates, map });
    })
    .catch((error) => console.error(error));
};

form.addEventListener("submit", searchAddressHandler);
