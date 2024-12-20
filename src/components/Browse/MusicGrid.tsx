import { SimpleGrid } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import { useState, useEffect } from "react";
import musics from "./data/musics";
import { MusicQuery } from "./Browse";
import MusicCardContainer from "./MusicCardContainer";
import MusicCardSkeleton from "./MusicCardSkeleton";

interface Props {
  musicQuery: MusicQuery;
}

const MusicGrid = ({ musicQuery }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const [data, setData] = useState(musics);
  const [isLoading, setLoading] = useState(true);

  // This is to mock the slow internet loading speed, it delays retrieving data by two seconds
  // Skeletons can be tested this way (if page loads too fast, whey won't show)
  // As mentioned in skeletons component, this gives user instant feedback when they first navigate to the page instead of nothing to display
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 1000);

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
      // Sort the data based on the sortOrder parameter
      .sort((a, b) => {
        if (musicQuery.sortOrder === "nameAsc") {
          return a.name.localeCompare(b.name); // Sort alphabetically ascending
        } else if (musicQuery.sortOrder === "nameDesc") {
          return b.name.localeCompare(a.name); // Sort alphabetically descending
        } else if (musicQuery.sortOrder === "yearAsc") {
          return a.year - b.year; // Sort by year ascending, if a year < b year, result will the negative, a will be placed infront of b, otherwise, b infront of a
        } else if (musicQuery.sortOrder === "yearDesc") {
          return b.year - a.year; // Sort by year descending, in order for bigger number to be put in the front, need to reverse the fomula, if b year < a year, returns negative result, a will be placed infront of b, if b > a, positive result will place b infront of a
        } else if (musicQuery.sortOrder === "levelAsc") {
          return a.level - b.level; // Sort by year ascending
        } else if (musicQuery.sortOrder === "levelDesc") {
          return b.level - a.level;
        }
        return 0; // Default: no sorting
      });

    setData(filteredData); // Set the filtered and sorted data

    return () => clearTimeout(timer);
  }, [musicQuery]); // Everytime when there is new query data, the above fitering and sorting function runs and returns data dynamically

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
