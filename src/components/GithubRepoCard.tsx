import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

interface GithubRepoCardProps {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  url: string;
}

export default function GithubRepoCard(repo: GithubRepoCardProps) {
  return (
    <Link href={repo.url} target="_blank" rel="noopener noreferrer" _hover={{textDecoration: 'none'}}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" _hover={{backgroundColor: 'rgba(0,0,0, 0.1)'}}>
        <Flex direction="column" p={4}>
          <Heading size="md" mb={2}>
            {repo.name}
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={4}>
            {repo.description}
          </Text>
          <Flex justify="space-between">
            <Box>
              <Text fontWeight="bold">{repo.language}</Text>
              <Text fontSize="sm" color="gray.500">
                Language
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">{repo.stargazers_count}</Text>
              <Text fontSize="sm" color="gray.500">
                Stars
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">{repo.forks_count}</Text>
              <Text fontSize="sm" color="gray.500">
                Forks
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
}
