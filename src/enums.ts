/*********
 * Enums
 */
  /*** Types of Enums
   * Numberic
   * String
   * Heterogeneous (mix of both, not as common)
   */

  // Numeric Enum
  enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
  }
  
  function move(direction: Direction): void {
    console.log(`Moving ${Direction[direction]}`);
  }
  
  move(Direction.Up); // Output: Moving Up

  //String Enum
  enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
  }
  
  function paint(color: Color): void {
    console.log(`Painting with color ${color}`);
  }
  
  paint(Color.Red); // Output: Painting with color RED

  //Heterogeneous Enum
  enum UserResponse {
    No = 0,
    Yes = "YES"
  }
  
  function respond(rec: UserResponse): void {
    if (rec === UserResponse.Yes) {
      console.log("User responded YES");
    } else {
      console.log("User responded NO");
    }
  }
  
  respond(UserResponse.Yes); // Output: User responded YES
