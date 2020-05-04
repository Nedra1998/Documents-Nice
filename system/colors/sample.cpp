#include <algorithm>
#include <iostream>
#include <iterator>

int main() {
  int x = 1, y = 1;
  generate_n(std::ostream_iterator<int>(std::cout, " "), 21, [&] {
    int n = x;
    x = y;
    y += n;
    return n;
  });
  return 0;
}
