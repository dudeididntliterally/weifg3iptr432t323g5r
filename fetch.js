    fetch(
        "https://www.gaming-style.com/RushTeam/RushTeamWebGL/Pages/GetKeyNewGet.php?GetInfo=oxMwlTJpdc3IIbSXN6XY9HGLh3R15P1ihGAfFO%2bX%2fUA%3d",
        {
          method  : 'GET',
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
          },
        }
      ).then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
          console.log(result);
        },

        (error) => {
          setError(error);
          setIsLoaded(true);
          console.log(error);
        }
      );
    }
  };
