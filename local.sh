#! /usr/bin/bash

# ANSI escape codes for formatting
GREEN_BOLD='\033[1;32m'
ORANGE_BOLD='\033[1;33m'
RED_BOLD='\033[1;31m'
BLUE_BOLD='\033[1;34m'
RESET='\033[0m'
DIR="$PWD"

# The required yarn version to use this script
REQUIRED_YARN_VERSION="1.22.19"

# Get the installed Yarn version
INSTALLED_YARN_VERSION=$(yarn --version 2>/dev/null)

unlink_package() {
  local package_name="${1:-@agility/plenum-ui}"
  if [ -z "$1" ]; then
    yarn unlink
  else
    cd "$DIR/node_modules/$package_name"
    yarn unlink
  fi
  unlink_exit_code=$?
  if [ $unlink_exit_code -ne 0 ]; then
    echo -e "${ORANGE_BOLD}agility-cms-manager-app-react:warning${RESET} yarn unlink for '$package_name' encountered an error, but script will continue. \n"
  fi

  cd "$DIR"
  echo -e "\n"
}

link_package() {
  local package_name="${1:-@agility/plenum-ui}"
  if [ -z "$1" ]; then
    yarn link
  else
    cd "$DIR/node_modules/$package_name"
    yarn link
  fi
  unlink_exit_code=$?
  if [ $unlink_exit_code -ne 0 ]; then
    echo -e "${RED_BOLD}agility-cms-manager-app-react:error${RESET} yarn link for '$package_name' failed. Script cannot continue, exiting script."
    exit 1
  else
    echo -e "${GREEN_BOLD}@agility/plenum-ui:success${RESET} yarn link for '$package_name' successful\n"
  fi

  cd "$DIR"
}

check_yarn_version() {
  # Check if Yarn is installed and compare the version
  if [ -n "$INSTALLED_YARN_VERSION" ] && [ "$INSTALLED_YARN_VERSION" != "$REQUIRED_YARN_VERSION" ]; then
    echo -e "${RED_BOLD}error${RESET} Yarn version $required_version is required, but found version $INSTALLED_YARN_VERSION."
    exit 1
  fi

  echo -e "${BLUE_BOLD}info${RESET} Yarn version is $INSTALLED_YARN_VERSION. Proceeding with the script...\n"
}

### START SCRIPT

check_yarn_version

echo -e "Starting @agility/plenum-ui local watch script \n"
echo -e "${BLUE_BOLD}@agility/plenum-ui:info${RESET} unlinking existing symlink"
yarn unlink
if [ $? -ne 0 ]; then
  echo "yarn unlink for @agility/plenum-ui encountered an error, but script will continue. \n"
fi

if [ ! -d "node_modules" ] || [ ! -d "node_modules/react" ] || [ ! -d "node_modules/react-dom" ]; then
   echo -e "${ORANGE_BOLD}@agility/plenum-ui:warning${RESET} Could not find node_modules."
   echo -e "${BLUE_BOLD}@agility/plenum-ui:info${RESET} installing dependencies...\n"

   yarn install

   if [ $? -eq 0 ]; then
      echo -e "${GREEN_BOLD}@agility/plenum-ui:success${RESET} Finished installing dependencies"
   else
      echo -e "${RED_BOLD}@agility/plenum-ui:error${RESET} Couldn't install dependencies. Exiting script."
      exit 1
  fi
fi

echo -e "${BLUE_BOLD}@agility/plenum-ui:info${RESET} unlinking existing symlinks"
unlink_package react
unlink_package react-dom
unlink_package

echo -e "${BLUE_BOLD}@agility/plenum-ui:info${RESET} setting up symlinks...\n"

link_package react
link_package react-dom
link_package 

echo -e "${GREEN_BOLD}@agility/plenum-ui:success${RESET} You can now run 'yarn start-cms:local' in agility-cms-manager-app-react\n"
yarn start:watch
