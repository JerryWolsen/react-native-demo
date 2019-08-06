//
//  RNTMapView.h
//  rnProject
//
//  Created by Wolsen on 2019/3/13.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <BaiduMapAPI_Map/BMKMapComponent.h>
#import <BaiduMapAPI_Base/BMKBaseComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNMapView : BMKMapView

@property (nonatomic, assign) double    posLatitude;
@property (nonatomic, assign) double    posLongitude;
@property (nonatomic, copy)   NSString  *posName;
@property (nonatomic, copy) NSString    *posAddress;

@end

NS_ASSUME_NONNULL_END
