import { SimpleGrid } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import { useState, useEffect } from "react";
import musics from "../data/musics";
import { MusicQuery } from "../components/Browse";
import MusicCardContainer from "./MusicCardContainer";
import MusicCardSkeleton from "./MusicCardSkeleton";

interface Props {
  musicQuery: MusicQuery;
}

const MusicGrid = ({ musicQuery }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const [data, setData] = useState(musics);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 3000);

    const filteredData = musics
      // Filter by genre
      .filter((item) =>
        musicQuery.genre ? item.genre === musicQuery.genre.id : true
      )
      // Filter by level
      .filter((item) =>
        musicQuery.level ? item.level === musicQuery.level.id : true
      )
      // Filter by search text (includes both 'name' and 'composer')
      .filter((item) =>
        musicQuery.searchText
          ? item.name
              .toLowerCase()
              .includes(musicQuery.searchText.toLowerCase()) ||
            item.composer
              .toLowerCase()
              .includes(musicQuery.searchText.toLowerCase())
          : true
      )
      // Sort the data based on the sortOrder parameter (e.g., 'asc', 'desc')
      .sort((a, b) => {
        if (musicQuery.sortOrder === "asc") {
          return a.name.localeCompare(b.name); // Sort alphabetically ascending
        } else if (musicQuery.sortOrder === "desc") {
          return b.name.localeCompare(a.name); // Sort alphabetically descending
        }
        return 0; // Default: no sorting
      });

    setData(filteredData); // Set the filtered and sorted data

    return () => clearTimeout(timer);
  }, [musicQuery]);

  //no need to put {error && <Text>{error}</Text>} in the return, we can just return one or the other
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <MusicCardContainer key={skeleton}>
            <MusicCardSkeleton />
          </MusicCardContainer>
        ))}
      {data.map((music) => (
        <MusicCardContainer key={music.id}>
          <MusicCard music={music} />
        </MusicCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default MusicGrid;
