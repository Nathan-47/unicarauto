import NotFoundUI from "@/app/components/NotFoundUI";

export default function NotFound() {
  return (
    <NotFoundUI
      title="Car Not Found"
      subtitle="Sorry, we couldn't find the car you're looking for!"
      link_text="Go Back to Cars"
      link_href="/cars"
    />
  );
}
