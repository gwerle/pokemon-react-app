import { useEffect, useState } from "react";
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

import instance from "@/configuration/axios";

type UseRegionFilter = {
  regions: any[];
  locations: any[];
  areas: any[];
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  reset: UseFormReset<FieldValues>;
};

export const useRegionFilter = (): UseRegionFilter => {
  const [regions, setRegions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [areas, setAreas] = useState([]);
  const { register, handleSubmit, watch, reset } = useForm();
  const regionValue = watch("region");
  const locationValue = watch("location");

  useEffect(() => {
    instance
      .get("https://pokeapi.co/api/v2/region")
      .then(r => setRegions(r.data.results));
  }, []);

  useEffect(() => {
    setAreas([]);
    instance.get(regionValue).then(r => setLocations(r.data.locations));
  }, [regionValue]);

  useEffect(() => {
    instance.get(locationValue).then(r => setAreas(r.data.areas));
  }, [locationValue]);

  return {
    regions,
    locations,
    areas,
    register,
    handleSubmit,
    reset,
  };
};
