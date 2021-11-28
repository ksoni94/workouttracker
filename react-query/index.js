import { useQuery } from "react-query";
import axios from "axios";

export const useAuthenticate = () => {
  return useQuery("user", axios("api/users/authenticate"));
};
