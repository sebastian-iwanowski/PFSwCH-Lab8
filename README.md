# README

Aplikacja została napisana z użyciem frameworka React, jest to modyfikacja wersji z laboratorium. 
Wszystkie pliki dockerfile oraz docker-compose są praktycznie identyczne z plikami z laboratorium w związku z tym, że użyty został
ten sam bazowy obraz.

Dla wersji produkcyjnej: docker compose up --build

Dla wersji developerskiej: 
  docker build -f Dockerfile.dev3 -t local/nazwa .
  docker run -it --name nazwa -p 3000:3000 -v /app/node_modules -v $(pwd):/app local:/nazwa
  
Plik który został zmodyfikowany:
![obraz](https://user-images.githubusercontent.com/74077360/144722934-dce92a1d-55b6-415a-889b-96e4b2548fca.png)
