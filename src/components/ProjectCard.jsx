import { Badge, Box, Card, HStack, Image, Text, Link } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { FaFilePdf } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

import { HiArrowTopRightOnSquare } from "react-icons/hi2";


const ProjectCard = ({
  title,
  authors,
  conference,
  links = [],
  description,
  imageSrc,
}) => (
  <Card.Root
    bgColor="white"
    color="black"
    flexDirection="row"
    overflow="hidden"
    maxW="1180px"
    ml="8"
    mb="20"
    _hover={{
      bgColor: "rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease-in-out",
    }}
  >
    <Image
      src={imageSrc}
      alt="Project Image"
      width="400px"
      height="200px"
      minW="400px"
      minH="200px"
      objectFit="cover"
      mt="4"
      ml="1"
    />
    <Box>
      <Card.Body>
        <Card.Title fontWeight="semibold" fontSize="24px" mt="-5">
          {title}
        </Card.Title>
        <Text fontWeight="semibold">{authors}</Text>
        <HStack mt="2" mb="2">
          <Text color="gray" fontWeight="bold" fontSize="12px">
            {conference}
          </Text>
          {/* {links.map((link, index) => (
            <Link key={index} href={link.url} color="blue.500" fontSize="12px">
              <FaFilePdf />
              <FaVideo />
              <FaGithub />
              <HiArrowTopRightOnSquare />
            </Link>
          ))} */}
          <Link href="pdf-link-url" color="blue.500" fontSize="14px" isExternal>
            <FaFilePdf style={{ marginRight: "2px" }} /> PDF
          </Link>
          <Link
            href="video-link-url"
            color="blue.500"
            fontSize="14px"
            isExternal
          >
            <FaVideo style={{ marginRight: "2px" }} /> Video
          </Link>
          <Link
            href="github-link-url"
            color="blue.500"
            fontSize="14px"
            isExternal
          >
            <FaGithub style={{ marginRight: "2px" }} /> Code
          </Link>
          <Link href="acm-link-url" color="blue.500" fontSize="14px" isExternal>
            <FaGraduationCap style={{ marginRight: "2px" }} /> ACM
          </Link>
        </HStack>
        <Card.Description color="black" fontSize="13px" textAlign="justify">
          {description}
        </Card.Description>
      </Card.Body>
    </Box>
  </Card.Root>
);

export default ProjectCard;
