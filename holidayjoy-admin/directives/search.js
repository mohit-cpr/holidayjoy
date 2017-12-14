app.directive('search', function () {
    return {
        template: '<div class="row search_bg" style="margin:0px;">'+
            
        '<div class="col-sm-4">'+
            '<label for="destination">DESTINATION</label>'+
            '<input type="text" class="form-control" placeholder="Enter your destination">'+
        '</div>'+
        '<div class="col-sm-2">'+
            '<label for="check-in Date">Check-in Date</label>'+
            '<input type="date" class="form-control">'+
        '</div>'+
        '<div class="col-sm-2">'+
            '<label for="check-out Date">Check-out Date</label>'+
            '<input type="date" class="form-control">'+
        '</div>'+
        '<div class="col-sm-2">'+
            '<label for="no_of_guest">No Of Guest</label>'+
            '<input type="number" value="1" class="form-control" min="1">'+
        '</div>'+
        '<div class="col-sm-2">'+
            '<input type="submit" value="SEARCH" class="form-control" style="background: palegreen;font-weight: 600;margin-top:20px;">'+
        '</div>'+
    '</div>',
        
        }
    });