#!/usr/bin/env bash
set -e
echo -n 'hsojdluy' | node funcrypt -key 'd982ba6303097ffab5d269c85e85fbfc56b63b75d2e20c0c0a415495d2a5cf63' | hexdump
echo -n 'hsojdluy' | node funcrypt -key 'd882ba6303097ffab5d269c85e85fbfc56b63b75d2e20c0c0a415495d2a5cf62' | hexdump
echo -n 'hsokdluy' | node funcrypt -key 'd982ba6303097ffab5d269c85e85fbfc56b63b75d2e20c0c0a415495d2a5cf62' | hexdump
echo -n 'hsojdluy' | node funcrypt -key 'd882ba6303097ffab5d269c85e85fbfc56b63b75d2e20c0c0a415495d2a5cf63' | hexdump
echo -n 'hsojdluy' | node funcrypt -key 'd882ba6303097ffab5d269c85e85fbfc56b63b75d2e20c0c0a415495d2a5cf62' | hexdump
echo -n 'hsokdluy' | node funcrypt -key 'd882ba6303097ffab5d269c85e85fbfc56b63b75d2e20c0c0a415495d2a5cf62' | hexdump
