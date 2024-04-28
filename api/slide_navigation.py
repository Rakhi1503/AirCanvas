import win32com.client
from cvzone.HandTrackingModule import HandDetector
import cv2
import os
import numpy as np
import aspose.slides as slides
import aspose.pydrawing as drawing
import tkinter as tk
from tkinter import filedialog
def slide_navigation_function():
    filepath = filedialog.askopenfilename(filetypes=[("PowerPoint files", "*.pptx")])
    filepath = filepath.replace("/", "\\")
    filepath = "C:\\\\" + filepath[3:]

    # Print the filepath for verification
    print(filepath)

    # Open PowerPoint application and presentation
    Application = win32com.client.Dispatch("PowerPoint.Application")
    Presentation = Application.Presentations.Open(filepath)
    print(Presentation.Name)
    Presentation.SlideShowSettings.Run()

    # Parameters
    width, height = 900, 720
    gestureThreshold = 300

    # Camera Setup
    cap = cv2.VideoCapture(0)
    cap.set(3, width)
    cap.set(4, height)

    # Hand Detector
    detectorHand = HandDetector(detectionCon=0.8, maxHands=1)

    # Variables
    imgList = []
    delay = 30
    buttonPressed = False
    counter = 0
    drawMode = False
    imgNumber = 20
    delayCounter = 0
    annotations = [[]]
    annotationNumber = -1
    annotationStart = False

    while True:
        # Get image frame
        success, img = cap.read()

        # Find the hand and its landmarks
        hands, img = detectorHand.findHands(img)  # with draw

        if hands and buttonPressed is False:  # If hand is detected
            hand = hands[0]
            cx, cy = hand["center"]
            lmList = hand["lmList"]  # List of 21 Landmark points
            fingers = detectorHand.fingersUp(hand)  # List of which fingers are up

            # Check if the hand is right or left
            if lmList[4][0] < cx:  # If the thumb landmark is to the left of the palm center, it's a right hand
                is_right_hand = True
            else:
                is_right_hand = False

            if cy <= gestureThreshold:  # If hand is at the height of the face
                if fingers == [1, 1, 1, 1, 1] and not is_right_hand:
                    print("Next")
                    buttonPressed = True
                    if imgNumber > 0:
                        Presentation.SlideShowWindow.View.Next()
                        imgNumber -= 1
                        annotations = [[]]
                        annotationNumber = -1
                        annotationStart = False
                elif fingers == [1, 1, 1, 1, 1] and is_right_hand:
                    print("Previous")
                    buttonPressed = True
                    if imgNumber > 0:
                        Presentation.SlideShowWindow.View.Previous()
                        imgNumber += 1
                        annotations = [[]]
                        annotationNumber = -1
                        annotationStart = False

        else:
            annotationStart = False

        if buttonPressed:
            counter += 1
            if counter > delay:
                counter = 0
                buttonPressed = False

        for i, annotation in enumerate(annotations):
            for j in range(len(annotation)):
                if j != 0:
                    cv2.line(img, annotation[j - 1], annotation[j], (0, 0, 200), 12)

        cv2.imshow("Image", img)

        key = cv2.waitKey(1)
        if key == ord('q'):
            break

    return "Slide navigation functionality implemented"