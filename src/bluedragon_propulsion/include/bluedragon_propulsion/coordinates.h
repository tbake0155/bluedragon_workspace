#ifndef COORDINATES_H
#define COORDINATES_H

#include <math.h>

// class to hold 2d coordinates so that two variables are not needed

class coordinates
{
    private:
        double x;
        double y;
        double radius;
        double radians;
        
    public:
    	   // constructors and destructor
        coordinates(){x=0.0;y=0.0;radians=0.0;radius=0.0;}
	   coordinates(double X, double Y)
        {
            x=X;y=Y;coordinates origin;
            this->convert_to_polar(origin);    
        }
        coordinates(double X, double Y, double r, double R)
        {
        	  x=X; y=Y; radians=r; radius=R;
        }
        ~coordinates(){}
        // setters and getters
        double get_X() {return x;}
        void set_X(double X){x=X;}
        double get_Y() {return y;}
        void set_Y(double Y){y=Y;}
        double get_radians(){return radians;}
        void set_radians(double r){radians=r;}
        double get_radius()const{return radius;}
        void set_radius(double r){radius=r;}
        // find distance between two coordinate points
        double find_distance(const coordinates& other)const
        {
    		   double xdist=this->x - other.x;
             double ydist=this->y - other.y;
             double distance=sqrt((xdist*xdist)+(ydist*ydist));
             return distance;
        }
        // convert cartesian coordinates to polar
        void convert_to_polar(coordinates& other)
        {
	       double xdist=this->x - other.get_X();
            radius=this->find_distance(other);
	       radians=radius*cos(xdist);
	   }
        
};

#endif // COORDINATES_H
