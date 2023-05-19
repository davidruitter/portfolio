import { Heading, Flex, IconButton, useColorMode, SimpleGrid, Box } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import GithubRepoCard from '../components/GithubRepoCard';
import './App.css'
import { useEffect, useState } from 'react';
import { Repository } from '../models/Repository';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/davidruitter/repos")
    .then((response) => response.json())
    .then((data) => {
      setRepos(data);
      setIsLoading(false);
    })
  }, []);

  return (
    <Box padding={5}>
      <Flex justify='space-between'>
        <Heading>David Ruitter's Personal Portfolio</Heading>
        <IconButton aria-label='Toggle color mode' icon={
          colorMode === 'light'
            ? <SunIcon />
            : <MoonIcon />
          }
          onClick={toggleColorMode}
        />
      </Flex>
      {
        isLoading && <Box>Loading...</Box>
      }
      {
        !isLoading &&
          <SimpleGrid columns={2} spacing={5} marginTop={5}>
            {repos.map((repo: Repository, index: number) => 
              <GithubRepoCard
                key={index}
                name={repo.name}
                description={repo.description}
                language={repo.language ?? '-'}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                url={repo.html_url}
              />
            )}
          </SimpleGrid>
      }
    </Box>
  )
}
