#include "coordinates.h"

#ifndef OBJECT_H
#define OBJECT_H

class object
{
     private:
        coordinates point;
        bool red_bouy;
        bool green_bouy;
        int zone;

     public:
        //constructors
        object(){point; red_bouy=green_bouy=false; zone=0;}
        object(coordinates xy, bool r, bool g, int z)
        {
             point=xy; red_bouy=r; green_bouy=g; zone=z;
        }
        //destructor
        ~object(){}
        //setters
        void set_point(coordinates c){point=c;}
        void set_point(double X, double Y, double r, double R){point.set_X(X);point.set_Y(Y);point.set_radians(r);point.set_radius(R);}
        void set_red_bouy(bool b){red_bouy=b;}
        void set_green_bouy(bool b){green_bouy=b;}
        void set_zone(int z){zone=z;}
        //getters
        coordinates get_point(){return point;}
        double get_radians(){return point.get_radians();}
        double get_radius()const {return point.get_radius();}
        bool get_red_bouy(){return red_bouy;}
        bool get_green_bouy(){return green_bouy;}
        int get_zone(){return zone;}
        //operator overloading
        bool operator<(const object& other)const
        {
             if(this->zone < other.zone)
             {
             	   if(this->get_radius() < other.get_radius())
             	   {
             	        return true;
             	   }
             }
             return false;
        }
        //other functions
        bool not_zone_1()
        {
        	   if(zone!=1)
        	   {
        	        return true;
        	   }
        	   return false;
        }
};

#endif // OBJECT_H
