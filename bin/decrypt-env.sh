#!/bin/bash
# Script by Adrian Puente Z..
# Powered by Hackarandas www.hackarandas.com
# Licensed by GNU GPLv3
# http://www.gnu.org/licenses/gpl-3.0.txt
#
# Description: This script encrypts the .env file with PGP for storage in the repository
#
# Keywords: env, environmental variables, pgp
#
set -euf -o pipefail

gpg -saer 0x6326DB03A60495D7 -o ../env.asc ../.env
