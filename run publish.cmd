@echo off
TITLE TeamCityTheatre -- Publish
rmdir /S /Q "./publish-output" & dotnet restore "./src/TeamCityTheatre.sln" && dotnet clean "./src/TeamCityTheatre.sln" --configuration Release --verbosity normal && cd "./src/TeamCityTheatre.Web" && yarn install && yarn run build:release && cd .. && cd .. && dotnet publish "./src/TeamCityTheatre.Web/TeamCityTheatre.Web.csproj" --configuration Release --verbosity normal --output "./../../publish-output"
pause