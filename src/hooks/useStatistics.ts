// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { fetchStatistics } from "../services/adminServices";

// dto
import { IStatisticsDto } from "@/dto/statisticsDto";

export const useStatistics = () => {
  return useQuery<IStatisticsDto>({
    queryKey: ["statistics"],
    queryFn: fetchStatistics,
  });
};

export default useStatistics;
