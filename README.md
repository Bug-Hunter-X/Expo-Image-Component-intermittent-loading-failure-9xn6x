# Expo Image Component Intermittent Loading Failure

This repository demonstrates a bug where the Expo `Image` component intermittently fails to load remote images without providing a clear error message.  The issue is likely related to network inconsistencies or temporary server issues, but the lack of feedback from Expo makes debugging difficult.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe the image component.  Note that the image may load successfully sometimes and fail at other times without any error messages.

## Solution

The solution involves implementing custom error handling and potentially adding retry logic to improve robustness.  The improved code is in `bugSolution.js`.