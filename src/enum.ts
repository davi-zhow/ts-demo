enum Days {Sun, Mon=1, Tue, Wed, Thu, Fri, Sat='sateday'};

enum Week {Mon=Days.Mon, Tue=Mon + 1}
enum  E {
    X,
    Y
};
interface I_1 {
    A:E.X,
    B:E.Y
}

let c: I_1 = {
    A: 4,
    B: 6
}