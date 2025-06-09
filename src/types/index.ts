export type ServiceCost = {
  service: string;
  cost: string; 
}

export type CostByServiceResponse = {
  costByService: ServiceCost[];
};

export type Instance = {
  InstanceId: string;
  State: string;
  Type: string;
  AZ: string;
  LaunchTime: string;
  PublicIpAddress: string;
};

export type User={
  username: string;
}