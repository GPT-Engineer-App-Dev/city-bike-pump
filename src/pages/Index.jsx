import { Container, Text, VStack, Box } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Box>
      <Box as="nav" bg="blue.500" color="white" p={4}>
        <Text fontSize="xl" fontWeight="bold">Bike Pump Stations in Stockholm</Text>
      </Box>
      <Map />
    </Box>
  );
};

export default Index;