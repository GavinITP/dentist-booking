import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getBookings from "@/libs/booking/getBookings";
import BookingInfo from "@/components/Booking/BookingInfo";

const MyBooking = async () => {
  const session = await getServerSession(authOptions);

  const bookingsJson = await getBookings(session?.user.token);
  const bookingsData = bookingsJson.data;

  return (
    <BookingInfo
      bookingsData={bookingsData}
      isAdmin={
        session?.user.name === "staff" || session?.user.role === "admin"
          ? true
          : false
      }
    />
  );
};

export default MyBooking;
