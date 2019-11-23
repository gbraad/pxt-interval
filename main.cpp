#include <stdlib.h>
#include "pxt.h"
#include "mbed.h"

using namespace std;

namespace interval {

    Ticker timer;

    //%
    void onInterval(uint8_t interval, (*fptr) {
        timer.attach(fptr, interval)
    }
    
} // namespace interval