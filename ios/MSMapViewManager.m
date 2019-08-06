//
//  RNMapViewManager.m
//  rnProject
//
//  Created by Wolsen on 2019/3/12.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "MSMapViewManager.h"

#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

#import "RNMapView.h"

@interface MSMapViewManager()<BMKMapViewDelegate>

@end

@implementation MSMapViewManager

//RN标记宏
RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(posLatitude, double)
RCT_EXPORT_VIEW_PROPERTY(posLongitude, double)
RCT_EXPORT_VIEW_PROPERTY(posName, NSString)
RCT_EXPORT_VIEW_PROPERTY(posAddress, NSString)

- (RNMapView *)view
{
  RNMapView *view = [[RNMapView alloc] init];
  [self setupMap:view];
  [self addControlBtns:view];
 
  return view;
}

- (void) setupMap:(RNMapView *)view
{
  view.delegate = self;
  view.showsUserLocation = true;
  view.zoomLevel = 14;
  view.showMapScaleBar = false;
 
}

- (void) addControlBtns: (RNMapView *)view
{
  UIButton *zoomInBtn = [UIButton buttonWithType:UIButtonTypeCustom];
  [zoomInBtn setBackgroundImage:[UIImage imageNamed:@"mapZoomIn"] forState:UIControlStateNormal];
  [zoomInBtn addTarget:self action:@selector(zoomIn:) forControlEvents:UIControlEventTouchUpInside];
  [view addSubview:zoomInBtn];
  
  CGRect screenFrame = [UIScreen mainScreen].bounds;
  CGFloat screenWidth = screenFrame.size.width;
  CGFloat screenHeight = screenFrame.size.height;
  BOOL isIphoneX = [[UIApplication sharedApplication] statusBarFrame].size.height >= 44;
  CGFloat xInsets = isIphoneX ? 122 : 64;
  
  [zoomInBtn setFrame:CGRectMake(screenWidth - 47 - 6, screenHeight - xInsets - 47 - 154, 47, 47)];
  
  UIButton *zoomOutBtn = [UIButton buttonWithType:UIButtonTypeCustom];
  [zoomOutBtn setBackgroundImage:[UIImage imageNamed:@"mapZoomOut"] forState:UIControlStateNormal];
  [zoomOutBtn addTarget:self action:@selector(zoomOut:) forControlEvents:UIControlEventTouchUpInside];
  [view addSubview:zoomOutBtn];
  [zoomOutBtn setFrame:CGRectMake(screenWidth - 47 - 6, screenHeight - xInsets - 47 - 104, 47, 47)];
  
  UIButton *locationBtn = [UIButton buttonWithType:UIButtonTypeCustom];
  [locationBtn setBackgroundImage:[UIImage imageNamed:@"currentLocation"] forState:UIControlStateNormal];
  [locationBtn addTarget:self action:@selector(gotoCurrentLocation:) forControlEvents:UIControlEventTouchUpInside];
  [view addSubview:locationBtn];
  [locationBtn setFrame:CGRectMake(screenWidth - 47 - 6, screenHeight - xInsets - 47 - 30, 47, 47)];
}

- (void)zoomIn:(UIButton *)btn
{
  NSLog(@"zoomIn");
  RNMapView *view = (RNMapView *)btn.superview;
  if(view.zoomLevel < 21) {
    view.zoomLevel += 1;
  }
}

- (void)zoomOut:(UIButton *)btn
{
  NSLog(@"zoomOut");
  RNMapView *view = (RNMapView *)btn.superview;
  if(view.zoomLevel > 4) {
    view.zoomLevel -= 1;
  }
}

- (void)gotoCurrentLocation:(UIButton *)btn
{
  NSLog(@"gotoCurrentLocation");
}

- (void)mapViewDidFinishLoading:(RNMapView *)mapView
{
  NSLog(@"BMKMapView 控件初始化完成");
  [mapView setCenterCoordinate:CLLocationCoordinate2DMake(mapView.posLatitude,  mapView.posLongitude) animated:true];
  NSLog(@"Jerry2 %s", mapView.posAddress);
  BMKPointAnnotation *annotation = [[BMKPointAnnotation alloc] init];
  annotation.coordinate = CLLocationCoordinate2DMake(mapView.posLatitude, mapView.posLongitude);
  annotation.title = mapView.posName;
  annotation.subtitle = mapView.posAddress;
  [mapView addAnnotation:annotation];
  [mapView showAnnotations:[NSArray arrayWithObject:annotation] animated:true];
}

- (BMKAnnotationView *)mapView:(RNMapView *)mapView viewForAnnotation:(id<BMKAnnotation>)annotation
{
  BMKAnnotationView *view = [[BMKAnnotationView alloc] initWithAnnotation: annotation reuseIdentifier: @"ViewID"];
  view.image = [UIImage imageNamed:@"round"];
  return view;
}

- (void)mapView:(RNMapView *)mapView didSelectAnnotationView:(BMKAnnotationView *)view
{
  NSLog(@"click annotation");
  id<BMKAnnotation> annotation = mapView.annotations[0];
  
  NSLog(@"into annotation");
  [mapView deselectAnnotation:annotation animated:NO];
  
}

@end
